// Symbol in JavaScript
// Symbol is a primitive data type introduced in ES6
// It is used to create unique identifiers for object properties

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

console.log(symbol1 === symbol2); //false

// when to use Symbol?
const person = {
  [symbol1]: "Asif",
  age: 25,
  [symbol2]: "Another Asif",
};

console.log(person);

console.log(person[symbol1]);
console.log(person[symbol2]);
console.log(person.age);

for (let key in person) {
  console.log(key); //age
}
console.log(Object.keys(person)); //['age']
console.log(Object.getOwnPropertyNames(person)); //['age']
console.log(Object.getOwnPropertySymbols(person)); //[Symbol(name), Symbol(name)]
