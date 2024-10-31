//Calling Super With Call Method in Javascript

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am Common Method');
}

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

Square.prototype = Object.create(Shape.prototype) //relation sqr --> Square --> Shape --> Object
Square.prototype.constructor = Square //reset constructor


Square.prototype.draw = function () {
    console.log('Drawing');
}



// var shape = new Shape()
var sqr = new Square(73, 'green')