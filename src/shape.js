function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  if (this.sides === 1){
    return 0
  } else {
    return this.width * this.height;
  }
};

Shape.prototype.perimeter = function() {
  if (this.sides === 1){
    return 0;
  } else {
    return (this.width * 2) + (this.height * 2)
  }
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

Shape.prototype.getRGB = function() {
  if(this.color === 'red'){
    return "rgb(255,0,0)";
  } else if(this.color === 'blue'){
    return "rgb(235,0,0)"
  }
};

module.exports = Shape;
