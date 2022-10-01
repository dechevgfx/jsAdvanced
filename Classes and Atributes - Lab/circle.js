class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}
let circle = new Circle(2);
console.log(circle.area)
circle.radius = 5
console.log(circle.area)
