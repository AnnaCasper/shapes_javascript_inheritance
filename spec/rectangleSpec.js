var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe('Draw', function(){
    it('should return a string specifies the number of sides', function(){
      expect(rectangle.draw()).toEqual('A shape with 4 sides');
    });
  });

  describe('toString', function(){
    it('should return a string that specifies the number of sides and the color', function(){
      expect(rectangle.toString()).toEqual('[Shape sides:4, color:blue ]')
    });
  });

  describe('getRGB', function(){
    it('should return rgb value as a string', function(){
      expect(rectangle.getRGB()).toEqual("rgb(235,0,0)");
    });
  });
});
