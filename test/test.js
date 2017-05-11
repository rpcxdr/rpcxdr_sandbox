var expect    = require("chai").expect;
var m = require("../app/index.js");

describe("Mandelbrot Function", function() {
  it("Correctly computes a point", function() {
    var p = {x:-0.75, y:0.1};
    var result = m.mandelbrot(p, 255);
    expect(result).to.equal(32);
  });
});