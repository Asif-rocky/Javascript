const numbers = [1, 2, 3, 4, 5];
// Using every to check if all numbers are greater than 0
const allGreaterThanZero = numbers.every((num) => num > 0);
console.log(allGreaterThanZero);
// Output: true

// Using some to check if there is at least one even number
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber);
// Output: true

const words = ["apple", "banana", "cherry", "date"];
// Using every to check if all words have more than 3 letters
const allLongerThanThree = words.every((word) => word.length > 3);
console.log(allLongerThanThree);
// Output: true

// Using some to check if there is at least one word that starts with 'b'
const hasWordStartingWithB = words.some((word) => word.startsWith("b"));
console.log(hasWordStartingWithB);
// Output: true
