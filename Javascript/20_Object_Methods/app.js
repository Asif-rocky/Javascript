function greet() {
  return `Hello! my name is ${person.name} and I am ${person.age} years old.`;
}

const person = {
  name: "Asif Ali",
  age: 29,
  greet,
};
console.log(person.greet());

// Other way of wrting the above greet method
const person1 = {
  name: "Tousif",
  age: 32,
  greet: function () {
    return `Hello! my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(person1.greet());
