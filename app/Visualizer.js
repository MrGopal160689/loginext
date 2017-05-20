import Utils from 'App/Utils'

class Visualizer {
    constructor(config) {
        this.BBox = null,
            this.pinData = null,
            this.canvas = config.canvas,
            this.graph = this.canvas.createObject({ type: 'rectangle', stroke: 'rgb(200,200,200)', x: this.canvas.width / 3, y: this.canvas.height / 10, width: this.canvas.width / 3, height: this.canvas.height / 10 + this.canvas.height / 10 }),
            this.mapCanvas = this.canvas.createObject({ type: 'rectangle', stroke: 'rgb(200,200,200)', x: this.canvas.width / 3, y: 4 * this.canvas.height / 10, width: this.canvas.width / 3, height: this.canvas.height / 10 + 4 * this.canvas.height / 10 }),
            this.slider = this.canvas.createObject({ type: 'circle', x: this.graph.x - 10, y: this.graph.y + this.graph.height, radius: 5, fill: 'black' })
        this.init()
    }
    init() {
        $(window).on('mousedown', (event) => {
            if (Utils.collideCircle({ x: event.offsetX, y: event.offsetY }, this.slider)) {
                $(window).on('mousemove', this.dragSlider.bind(this))
                $(window).on('mouseup', this.stopSlider.bind(this))
            }
        })
    }
    dragSlider(event) {
        let y = Utils.clamp(event.offsetY, this.graph.y, this.graph.y + this.graph.height)
        this.slider.y = y;
        requestAnimationFrame(() => {
            this.update()
        })
    }
    stopSlider() {
        $(window).off('mousemove')
        $(window).off('mouseup')
    }
    update() {
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        let sliderRate = Math.floor(Utils.map(this.slider.y, this.graph.y, this.graph.y + this.graph.height, 1, 10)),
            total = 0

        this.canvas.drawText({ text: `Rating : ${sliderRate}`, x: this.slider.x - this.slider.radius - 50, y: this.slider.y, fill: 'black' })

        this.slider.fill = Utils.getColor(sliderRate)

        for (let long in this.pinData) {
            let gx = Utils.map(long, this.BBox.xMin, this.BBox.xMax, this.graph.x, this.graph.x + this.graph.width),
                mx = Utils.map(long, this.BBox.xMin, this.BBox.xMax, this.mapCanvas.x, this.mapCanvas.x + this.mapCanvas.width)

            for (let rate in this.pinData[long]) {
                let gy = Utils.map(rate, 1, 10, this.graph.y, this.graph.y + this.graph.height)

                // plot graph
                if (Utils.inMap(gx, gy, this.graph)) {
                    this.canvas.drawRectangle({ type: 'rectangle', x: gx - 5, y: gy, width: 10, height: this.graph.y + this.graph.height - gy, fill: 'rgba(0,0,0,0.2)' })
                }
                this.pinData[long][rate].forEach((lat) => {
                    let my = Utils.map(lat.lat, this.BBox.yMin, this.BBox.yMax, this.mapCanvas.y, this.mapCanvas.y + this.mapCanvas.height),
                        radius = Utils.map(rate, 10, 1, 5, 20)

                    // plot pin on map
                    if (Utils.inMap(mx, my, this.mapCanvas)) {
                        this.canvas.drawCircle({ type: 'circle', x: mx, y: my, radius: radius, fill: 'rgba(0,0,0,0.2)' })
                    }

                    // show indicators
                    if (rate == sliderRate && Utils.inMap(mx, my, this.mapCanvas)) {
                        this.canvas.drawCircle({ type: 'circle', x: mx, y: my, radius: radius, fill: Utils.getColor(rate) })

                        this.canvas.drawLine({ type: 'line', startX: this.mapCanvas.x, startY: my, endX: this.mapCanvas.x + this.mapCanvas.width, endY: my, stroke: 'rgb(0,100,255)' })

                        this.canvas.drawText({ type: 'text', text: `@ lng : ${parseFloat(long).toFixed(2)}, lat : ${parseFloat(lat.lat).toFixed(2)}, PIN :${lat.pin}`, x: this.mapCanvas.x + this.mapCanvas.width + 10, y: my, fill: 'black' })

                        total++;

                    }

                })

                // show indicators
                if (rate == sliderRate && Utils.inMap(gx, gy, this.graph)) {
                    this.canvas.drawRectangle({ type: 'rectangle', x: gx - 5, y: gy, width: 10, height: this.graph.y + this.graph.height - gy, fill: Utils.getColor(rate) })

                    this.canvas.drawLine({ type: 'line', startX: gx, startY: this.graph.y, endX: gx, endY: this.graph.y + this.graph.height, stroke: 'rgb(0,100,255)' })
                    this.canvas.drawLine({ type: 'line', startX: gx, startY: this.mapCanvas.y, endX: gx, endY: this.mapCanvas.y + this.mapCanvas.height, stroke: 'rgb(0,100,255)' })

                }

            }
        }

        this.canvas.drawText({ type: 'text', text: `Total ${total} PIN${ total>1 ? 's' : ''}`, x: this.graph.x + this.graph.width + 10, y: this.slider.y, fill : 'black' })

        // conclusion text
        this.canvas.drawText({ type: 'text', text: `We found ${total} PIN${ total>1 ? 's' : ''} rated ${sliderRate} in the given coordinates`, x: this.graph.x, y: this.graph.y - 50, fill : 'black' })

        this.canvas.drawLine({ type: 'line', startX: this.graph.x, startY: this.slider.y, endX: this.graph.x + this.graph.width, endY: this.slider.y, stroke: 'rgb(0,100,255)' })

        this.canvas.render()

    }
}

export default Visualizer;
