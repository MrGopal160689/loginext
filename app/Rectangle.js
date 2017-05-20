class Rectangle {
    constructor(config) {
        this.type = 'rectangle'
        this.x = config.x
        this.y = config.y
        this.width = config.width
        this.height = config.height
        this.fill = config.fill || null
        this.stroke = config.stroke || null
    }
}
export default Rectangle;
