import Utils from 'App/Utils'
import Canvas from 'App/Canvas'
import googleMap from 'App/Map'
import Visualizer from 'App/Visualizer'


window.onload = function() {

    let canvas = new Canvas({
            canvas: document.querySelector('.canvas'),
            width: window.innerWidth,
            height: window.innerHeight
        }),
        visualizer = new Visualizer({ canvas: canvas })

    $('#map').css({
        'position': 'absolute',
        'width': `${visualizer.mapCanvas.width}px`,
        'height': `${visualizer.mapCanvas.height}px`,
        'left': `${visualizer.mapCanvas.x}px`,
        'top': `${visualizer.mapCanvas.y}px`
    })

    let map = new googleMap({
        elem: document.querySelector('#map'),
        item : 10,
        change: (bbox, data) => {
            visualizer.BBox = bbox, visualizer.pinData = data
            visualizer.update()
        }
    })
}
