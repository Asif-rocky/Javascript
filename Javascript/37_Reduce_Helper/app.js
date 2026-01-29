// Reduce Helper is a utility function that simplifies the use of the Array.prototype.reduce method.
// It takes an array, a reducer function, and an initial value as arguments,
// and returns the reduced value.

function reduceHelper(array, reducer, initialValue) {
  return array.reduce(reducer, initialValue);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = reduceHelper(
  numbers,
  (accumulator, current) => accumulator + current,
  50,
);
// Initial value is 50, so the logic performed is
// 50 + 1 = 51
// 51 + 2 = 53
// 53 + 3 = 56
// 56 + 4 = 60
// 60 + 5 = 65
console.log(sum); // Output: 65

// Another example: concatenating strings
const words = ["become", " ", "successful person", "!"];
const concatenated = reduceHelper(
  words,
  (accumulator, current) => accumulator + current,
  "I will ",
);
console.log(concatenated); // Output: "I will become successful person!"

//Directly using reduce without the helper for comparison
const directSum = numbers.reduce((acc, curr) => acc + curr, 50);
console.log(directSum); // Output: 65

//Frequency count example
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "apple",
];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount);
// Output: { apple: 3, banana: 2, orange: 2 }
