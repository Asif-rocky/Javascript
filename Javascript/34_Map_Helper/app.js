let numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

let peoples = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
  { firstName: "Charlie", lastName: "Brown" },
];

// Using map to create a new array with full names
let fullNames = peoples.map(
  (person) => `${person.firstName} ${person.lastName}`
);
console.log(fullNames); // Output: ['Alice Smith', 'Bob Johnson', 'Charlie Brown']
