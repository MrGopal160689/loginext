class Line {
    constructor(config) {
        this.type = 'line'
        this.startX = config.startX
        this.startY = config.startY
        this.endX = config.endX
        this.endY = config.endY
        this.fill = config.fill || null
        this.stroke = config.stroke || null
    }
}
export default Line;
