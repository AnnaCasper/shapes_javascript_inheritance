var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}

Square.prototype = new Shape();

Square.prototype.area = function(){
  return this.sideLength * this.sideLength
};

Square.prototype.perimeter = function(){
  return this.sideLength * 4;
}
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
