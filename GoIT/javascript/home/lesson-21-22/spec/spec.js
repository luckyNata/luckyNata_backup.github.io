var pow= require('../js/pow.js');

describe("function pow", function() {
  it("return right answer", function() {
  	var result = pow(3,3);
    expect(result).toEqual(27);
  });

  it("return 1", function() {
  	var result = pow(3,0);

    expect(result).toEqual(1);
  });

  it("return right answer", function() {
  	var result = pow(-2,2);

    expect(result).toEqual(4);
  });

  it("return right answer", function() {
  	var result = pow(0,2);

    expect(result).toEqual(0);
  });
});

