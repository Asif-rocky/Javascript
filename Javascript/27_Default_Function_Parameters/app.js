function createPerson(name, age = 0) {
  return {
    name,
    age,
  };
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob");
console.log(person1); // { name: 'Alice', age: 30 }
console.log(person2); // { name: 'Bob', age: 0 }
