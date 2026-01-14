const person = {
  firstName: "Asif",
  lastName: "Ali",
  age: 28,
  hobbies: ["reading", "traveling", "coding"],
  isProgrammer: true,
};

console.log(person);
console.log(person.firstName);
console.log(person.isProgrammer);
console.log(person["firstName"]);

// Adding a new property
person.country = "India";
console.log(person);

// Modifying an existing property
person.age = 29;
console.log(person);

// Deleting a property
delete person.isProgrammer;
console.log(person);
