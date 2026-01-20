function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    },
  };
}

const user1 = createUser("Asif", 29);
console.log(user1.greet());

function createUserEnhanced(name, age) {
  return {
    name,
    age,
    greet: () =>
      console.log(`Hello, my name is ${name} and I am ${age} years old.`),
  };
}

const user2 = createUserEnhanced("Ali", 29);
console.log(user2.greet());
