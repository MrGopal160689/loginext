import Utils from 'App/Utils'
import pinList from 'App/data'

class googleMap {
    constructor(config) {
        let mapPromise = [],
            API_KEY = "AIzaSyA3xj5DjVKh6Uh00YEkmBrxk4irVarX5V4",
            index = Math.floor(Math.random() * pinList.length),
            start = index + config.item > pinList.length - 1 ? pinList.length - 1 - config.item : index,
            BBox = {};

        for (let i = index, length = index + config.item; i < length; i++) {
            let settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://maps.googleapis.com/maps/api/geocode/json?address=${pinList[i].pin}&key=${API_KEY}`,
                "method": "GET"
            }

            mapPromise.push(new Promise((resolve, reject) => {
                (function(index) {
                    $.ajax(settings).done(function(response) {
                        let data = {
                            pin: response.results[0].address_components[0].long_name,
                            lat: response.results[0].geometry.location.lat,
                            long: response.results[0].geometry.location.lng,
                            rating: pinList[index].rating
                        }
                        return resolve(data)
                    });
                })(i);
            }))
        }

        Promise.all(mapPromise).then((data) => {
            var map = new google.maps.Map(config.elem, {
                zoom: 11,
                center: this.getCenter(data),
                // disableDefaultUI: true
            });

            google.maps.event.addListener(map, "bounds_changed", function() {
                BBox['xMin'] = map.getBounds().getSouthWest().lng(),
                    BBox['yMin'] = map.getBounds().getNorthEast().lat(),
                    BBox['xMax'] = map.getBounds().getNorthEast().lng(),
                    BBox['yMax'] = map.getBounds().getSouthWest().lat()

                config.change && config.change(BBox, Utils.extractData(data))
            });

        })
    }
    getCenter(data) {
        let xMin = null,
            xMax = null,
            yMin = null,
            yMax = null,
            center = {};
        data.forEach((pin) => {
            xMin = xMin == null ? pin.long : Math.min(xMin, pin.long),
                xMax = xMax == null ? pin.long : Math.max(xMax, pin.long),
                yMin = yMin == null ? pin.lat : Math.min(yMin, pin.lat),
                yMax = yMax == null ? pin.lat : Math.max(yMax, pin.lat)
        })

        return { lat: (yMax - yMin) / 2 + yMin, lng: (xMax - xMin) / 2 + xMin }
    }
}
export default googleMap;
