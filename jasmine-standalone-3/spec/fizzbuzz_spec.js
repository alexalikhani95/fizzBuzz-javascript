describe('fizzBuzz', function () {

  it("should return fizz for multiples of three", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it("should return buzz for multiples of five", function() {
     expect(fizzBuzz(5)).toEqual("buzz")
   });
});
