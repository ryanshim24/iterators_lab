var expect = require('chai').expect;
var Iterators = require('../iterators.js');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });


  //This is the MIN FUNCTION

  describe("#min", function() {
    var myArr;

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it("should return the minimum in an array", function(){
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it("should return Infinity for an empty array", function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });



  // THIS IS THE EACH FUNCTION

  describe("#each", function() {
    var myArr;

    beforeEach(function () {
      myArr = ["Ryan", "Jim", "David"];
    });

    // it("should go through the function x times based on how big the array is in this case 3", function(){
    //   var x = 0;
    //   Iterators.each(myArr, function(name) {
    //     console.log("Hi" + name);
    //     x++;
    //   });
    //   expect(x).to.equal(myArr.length);
    // });
    it("should take the elements of an array and put the same elements of the array into another array", function(){
      var newNames = [];
      Iterators.each(myArr, function(name) {
        console.log("Hi" + name);
        newNames.push(name);
      });
      expect(newNames).to.eql(myArr);
    });
  });

  describe("#map", function() {
    var myArr;

    beforeEach(function () {
      myArr =["Ryan", "Jim", "David"];
    });

    it("should be capitalized", function(){
      var newArr = Iterators.map(myArr, function(name) {
        return name.toUpperCase();
      });
      expect(newArr).to.eql(["RYAN","JIM","DAVID"]);
    });
  });


  describe("#filter", function() {
    var myArr;
    beforeEach(function () {
      myArr =[1,6,3,10];
    });

    it("should return the number that passes the condition", function(){
      var newArr = Iterators.filter(myArr, function(num) {
        return num < 8;
      });
      expect(newArr).to.eql([1,6,3]);
    });
  });


  describe("#reduce", function() {
    var myArr;
    beforeEach(function () {
      myArr = [1,2,3,4];
    });

    it("should print out the total sum of all my arrays", function(){
      var newVal = Iterators.reduce(myArr, function(a, b) {
        return a + b;
      });
      expect(newVal).to.eql(10);
    });
  });

  describe("#reject", function() {
    var myArr;
    beforeEach(function () {
      myArr = [1,6,3,10];
    });

    it("should return the number that fails the condition", function() {
      var newVal = Iterators.reject(myArr, function(num) {
        return num <8;
      });
      expect(newVal).to.eql([10]);
    });
  });


});
