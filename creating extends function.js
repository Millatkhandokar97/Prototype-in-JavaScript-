//Creating Extends Function in Javascript

function extend (parent, chaild){
    chaild.prototype = Object.create(parent.prototype)
    chaild.prototype.constructor = chaild
}


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

extend(Shape, Square)


Square.prototype.draw = function () {
    console.log('Drawing');
}

function Circle(redious, color) {
    Shape.call(this, color)
    this.redious = redious
}

extend(Shape, Circle)

Circle.prototype.common = function (){
    Shape.prototype.common.call(this)
    console.log('I have Overritten');
}



var shape = new Shape()
var sqr = new Square(73, 'green')

var crl = new Circle(50, 'yellow')