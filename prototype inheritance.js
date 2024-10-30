//Prototype Inheritance in javascript

function Shape() {
}

Shape.prototype.common = function () {
    console.log('I am Common Method');
}
function Square(width) {
    this.width = width
}

Square.prototype = Object.create(Shape.prototype) //relation sqr --> Square --> Shape --> Object
Square.prototype.constructor = Square //reset constructor
Square.prototype.draw = function () {
    console.log('Drawing');
}

function Circle() {
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
var circle = new Circle()

var shape = new Shape()
var sqr = new Square(73)




function Circle() {

}
Circle.prototype = {
    common: function () {
        console.log('I am Common Method');
    }
}

console.log(Shape.prototype);
console.log(Circle.prototype);