class Utils {
    static norm(value, min, max) {
        return (value - min) / (max - min)
    }
    static lerp(norm, min, max) {
        return norm * (max - min) + min
    }
    static map(value, min1, max1, min2, max2) {
        return this.lerp(this.norm(value, min1, max1), min2, max2)
    }
    static clamp(val, min, max) {
        return Math.min(max, Math.max(val, min))
    }

    static getColor(rating) {
        let r = Math.round(this.map(rating, 1, 10, 0, 255)),
            g = Math.round(this.map(rating, 1, 10, 255, 0)),
            b = 0

        return `rgb(${r},${g},${b})`
    }

    static inMap(x, y, map) {
        return x >= map.x &&
            x <= map.x + map.width &&
            y >= map.y &&
            y <= map.y + map.height
    }


    static collideCircle(point, circle) {
        let dx = point.x - circle.x,
            dy = point.y - circle.y,
            length = Math.sqrt(dx * dx + dy * dy)
        return length <= circle.radius
    }

    static extractData(pins) {
        var visual = {}
        pins.forEach((pin) => {
            visual[pin.long] = visual[pin.long] || {}
            visual[pin.long][pin.rating] = visual[pin.long][pin.rating] || [];
            visual[pin.long][pin.rating].push({ lat : pin.lat, pin : pin.pin })
        })
        return visual;
    }
}

export default Utils;
