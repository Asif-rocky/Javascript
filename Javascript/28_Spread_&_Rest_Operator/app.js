// Spread Operator using Functions
function giveMeFive(a, b, c, d, e) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
  console.log("e", e);
}

giveMeFive(...[1, 2, 3, 4, 5]);

// Spread Operator using Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log("Combined Array:", combinedArr);

// Spread Operator using Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Wonderland", occupation: "Adventurer" };
const combinedObj = { ...obj1, ...obj2 };
console.log("Combined Object:", combinedObj);

// Rest Operator in Functions
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
const total = sumAll(1, 2, 3, 4, 5);
console.log("Total Sum:", total);
