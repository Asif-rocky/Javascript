const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const stringArray = ["eat", "sleep", "code", "repeat"];
console.log(stringArray);

// Accessing array elements
console.log(numbers[0]); // 1
console.log(stringArray[2]); // code

// Nested array
const nestedArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false],
];
console.log(nestedArray);
console.log(nestedArray[1][0]); // a

// Modifying array elements
numbers[2] = 10;
console.log(numbers); // [1, 2, 10, 4, 5]
