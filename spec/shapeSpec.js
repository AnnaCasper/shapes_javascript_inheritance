var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("Perimeter", function(){
    it('should be 0 for this abstract shape', function(){
      expect(shape.perimeter()).toEqual(0);
    });
  });

  describe('Draw', function(){
    it('should return a string specifies the number of sides', function(){
      expect(shape.draw()).toEqual('A shape with 1 sides');
    });
  });

  describe('toString', function(){
    it('should return a string that specifies the number of sides and the color', function(){
      expect(shape.toString()).toEqual('[Shape sides:1, color:red ]')
    });
  });

  describe('getRGB', function(){
    it('should return rgb value as a string', function(){
      expect(shape.getRGB()).toEqual('rgb(255,0,0)');
    });
  });
  
});
