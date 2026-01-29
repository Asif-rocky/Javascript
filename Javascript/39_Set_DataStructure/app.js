const mySet = new Set();
console.log(mySet);

mySet.add("apple");
mySet.add("banana");
mySet.add("apple");

console.log(mySet); // {apple, banana}

console.log(mySet.has("banana")); //true

const secondSet = new Set([1, 2, 3, 4, 1, 2]);
console.log(secondSet); // {1, 2, 3, 4}
secondSet.delete(1);
console.log(secondSet); // {2, 3, 4}

secondSet.clear();
console.log(secondSet); // {}

for (let item of mySet) {
  console.log(item);
}
