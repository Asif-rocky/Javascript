// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Asif"));
console.log(greet("Ali"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3));
console.log(add(10, 20));

// Arrow function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6));
console.log(multiply(7, 8));

// Callback function
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processArray(numbers, (num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
