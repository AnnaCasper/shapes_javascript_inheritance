var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(width, height, color) {
  Shape.call(this, 4, color)
  this.width = width,
  this.height = height
}

Rectangle.prototype = new Shape();

module.exports = Rectangle;
