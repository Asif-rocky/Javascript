//Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//Ignoring values in Array Desctructuring
const colors = ["red", "green", "blue", "yellow"];
const [primary, , tertiary] = colors;
console.log(primary); // Output: red
console.log(tertiary); // Output: blue

//Object Destructuring
const person = {
  personName: "Alice",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  personName,
  address: { city },
} = person;
console.log(personName); // Output: Alice
console.log(city); // Output: New York

//Naming Variables in Object Destructuring
const { age: personAge } = person;
console.log(personAge); // Output: 30

//Rest operator in Object Destructuring
const { personName: name, ...otherDetails } = person;
console.log(name); // Output: Alice
console.log(otherDetails); // Output: { age: 30, address: { city: 'New York', country: 'USA' } }

//Functions with Destructured Parameters
function displayPerson({ personName, age }) {
  console.log(`Name: ${personName}, Age: ${age}`);
}
displayPerson(person); // Output: Name: Alice, Age: 30

//Default Values in Destructuring
const settings = {
  theme: "dark",
};
const { theme, fontSize = 14 } = settings;
console.log(theme); // Output: dark
console.log(fontSize); // Output: 14

//Nested Destructuring
const data = {
  id: 1,
  info: {
    title: "Destructuring in JS",
    tags: ["JavaScript", "ES6", "Programming"],
  },
};
const {
  info: {
    title,
    tags: [firstTag, , thirdTag],
  },
} = data;
console.log(title); // Output: Destructuring in JS
console.log(firstTag); // Output: JavaScript
console.log(thirdTag); // Output: Programming
