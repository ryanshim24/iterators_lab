# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:
var array = [1, 32, 65, 32]
* `max`---- Grabs the highest value of an array ex) max(array) === 65

* `min`---- Grabs the lowest value of an array ex) min(array) === 1

* `each`---Excutes a provided function for each array element.
ex) function buddy(num) {
	console.log(num)
}
	array.forEach(buddy) should print 1, 32, 65, 32



* `map`- Grabs an original array and creates a new array calling a provided function on every element of the array
Ex)
var names = ["ryan", "david", "isaac"]
function capit(nam) {
	return nam.toUpperCase();
}

var newName = names.map(capit);
console.log(newName) should print ['RYAN','DAVID','ISAAC']


* `filter`: Grabs an original array and creates a new array that passes the test of a provided function on every element of the array.
Ex)
var array = [1,5,10];

function reduce(num) {
	return num < 8;
}

var filtered = array.filter(reduce); Should print out [1, 5];


* `reduce`: Grabs an array and uses function against an accumulator taking the value of the array from left to right and reducing it to a single value.
Ex)

var array = [1,2,3,4];

function sum(a,b) {
	return a +b
} 
var added = array.reduce(sum); printing this out should give me the value of 10


* `reject`: Grabs an orginal array and createsa a new array that fails the test of a provided function on every element of the array. 
Ex)
var array = [1,5,10];

function reduce(num) {
	return num <8
}

var rejected = array.reject(reduce); Should print out [10];
### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

