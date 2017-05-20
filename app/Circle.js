class Circle {
    constructor(config) {
        this.type = 'circle'
        this.x = config.x
        this.y = config.y
        this.radius = config.radius
        this.fill = config.fill || null
        this.stroke = config.stroke || null
    }
}
export default Circle;
