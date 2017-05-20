import Rectangle from 'App/Rectangle'
import Circle from 'App/Circle'
import Line from 'App/Line'
import Text from 'App/Text'

class Canvas {
    constructor(config) {
        this.canvas = config.canvas
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.width = config.width
        this.height = this.canvas.height = config.height
        this.objects = []
        this.init()
    }
    init() {}
    createObject(config) {
        let object
        switch (config.type) {
            case 'rectangle':
                object = new Rectangle(config);
                break;
            case 'circle':
                object = new Circle(config);
                break;
            case 'line':
                object = new Line(config);
                break;
            case 'text':
                object = new Text(config);
                break;
            default:
                break;
        }
        this.objects.push(object)
        return object
    }
    drawObject(object) {
        switch (object.type) {
            case 'rectangle':
                this.drawRectangle(object);
                break;
            case 'circle':
                this.drawCircle(object);
                break;
            case 'line':
                this.drawLine(object);
                break;
            case 'text':
                this.drawText(object);
                break;
            default:
                break;
        }
    }
    drawRectangle(rectObj) {
        this.context.save()
        this.context.fillStyle = rectObj.fill || null
        this.context.strokeStyle = rectObj.stroke || null
        rectObj.fill && this.context.fillRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height)
        rectObj.stroke && this.context.strokeRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height)
        this.context.restore()
    }
    drawCircle(circObj) {
        this.context.save()
        this.context.fillStyle = circObj.fill
        this.context.strokeStyle = circObj.stroke
        this.context.beginPath()
        this.context.arc(circObj.x, circObj.y, circObj.radius, 0, Math.PI * 2)
        circObj.fill && this.context.fill()
        circObj.stroke && this.context.stroke()
        this.context.restore()
    }
    drawLine(lineObj) {
        this.context.save()
        this.context.strokeStyle = lineObj.stroke
        this.context.beginPath()
        this.context.moveTo(lineObj.startX, lineObj.startY)
        this.context.lineTo(lineObj.endX, lineObj.endY)
        lineObj.stroke && this.context.stroke()
        this.context.restore()
    }
    drawText(textObj) {
        this.context.save()
        this.context.textBaseline = 'middle';
        this.context.fillStyle = textObj.fill
        this.context.strokeStyle = textObj.stroke
        textObj.fill && this.context.fillText(textObj.text, textObj.x, textObj.y)
        textObj.stroke && this.context.strokeText(textObj.text, textObj.x, textObj.y)
        this.context.restore()
    }
    render() {
        this.objects.forEach((object) => {
            this.drawObject(object)
        })
    }
}
export default Canvas;
