// Instence of Prototype in javascript


function Square (width){
    this.width = width
    this.getWidth = function(){
        console.log('width is ' + this.width);
        // this.draw()
    }
}

Square.prototype ={
    draw: function(){
        this.getWidth()
        console.log('Draw');
    },
    toString: function(){
        return 'My width is = ' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(15)
console.log(sqr1);

// sqr1.hasOwnProperty('width')
// sqr1.hasOwnProperty('getWidth')

// console.log(Object.keys);

