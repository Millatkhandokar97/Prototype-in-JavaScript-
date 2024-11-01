//Polymorphism in Javascript

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

Square.prototype.common = function (){
    console.log('I am Sqeare and I have Overritten');
}


Square.prototype.draw = function () {
    console.log('Drawing');
}

function Circle(redious, color) {
    Shape.call(this, color)
    this.redious = redious
}

extend(Shape, Circle)

Circle.prototype.common = function (){
    console.log('I am Circle and I have Overritten');
}



var shape = new Shape()
var sqr = new Square(73, 'green')

var crl = new Circle(50, 'yellow')

var shapes = [shape, sqr, crl]
for (var i of shapes){
    i.common()
}

console.log(sqr instanceof Square);//eample
console.log(sqr instanceof Shape);//eample
console.log(sqr instanceof Circle);//eample
console.log(crl instanceof Shape);//eample
console.log(crl instanceof Circle);//eample
console.log(crl instanceof Square);//eample