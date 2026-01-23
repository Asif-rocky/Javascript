// For in Loop
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}
