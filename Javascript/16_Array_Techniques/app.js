//push
// Adds one or more elements to the end of an array and returns the new length of the array.
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

//pop
// Removes the last element from an array and returns that element.
const lastFruit = fruits.pop();
console.log(lastFruit); // "grape"
console.log(fruits); // ["apple", "banana", "orange"]

//shift
// Removes the first element from an array and returns that element.
const firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "orange"]

//unshift
// Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "banana", "orange"]

//concat
// Merges two or more arrays and returns a new array.
const moreFruits = ["mango", "pineapple"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["kiwi", "banana", "orange", "mango", "pineapple"]

//includes
// Determines whether an array includes a certain element, returning true or false.
const hasBanana = allFruits.includes("banana");
console.log(hasBanana); // true

//join
// Joins all elements of an array into a string.
const fruitString = allFruits.join(", ");
console.log(fruitString); // "kiwi, banana, orange, mango, pineapple"

//reverse
// Reverses the order of the elements in an array.
allFruits.reverse();
console.log(allFruits); // ["pineapple", "mango", "orange", "banana", "kiwi"]

//slice
// Returns a shallow copy of a portion of an array into a new array object.
const citrusFruits = allFruits.slice(2, 4);
console.log(citrusFruits); // ["orange", "banana"]

//sort
// Sorts the elements of an array in place and returns the sorted array.
allFruits.sort();
console.log(allFruits); // ["banana", "kiwi", "mango", "orange", "pineapple"]

//splice
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
allFruits.splice(2, 1, "strawberry", "blueberry");
console.log(allFruits); // ["banana", "kiwi", "strawberry", "blueberry", "orange", "pineapple"]
