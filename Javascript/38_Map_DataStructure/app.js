const map = new Map();

console.log(map);

const keyOne = "asif";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key Two");
map.set(keyThree, "Value of key Three");

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map);
console.log(map.size);

for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

// Practice
const practiceMap = new Map();

practiceMap.set("a", 1);
practiceMap.set("b", 2);
practiceMap.set("c", 3);

console.log(practiceMap);
console.log(practiceMap.get("a"));
console.log(practiceMap.size);
practiceMap.delete("b");
console.log(practiceMap.size);
