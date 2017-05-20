class Text {
    constructor(config) {
        this.type = 'text'
        this.text = config.text
        this.x = config.x
        this.y = config.y
        this.fill = config.fill || null
        this.stroke = config.stroke || null
    }
}
export default Text;
