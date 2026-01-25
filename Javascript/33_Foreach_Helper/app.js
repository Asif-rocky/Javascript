const colors = ["red", "green", "blue", "yellow"];

// Using forEach to iterate over the array
colors.forEach((color, index) => {
  console.log(`Color at index ${index}: ${color}`);
});
// Output:
// Color at index 0: red
// Color at index 1: green
// Color at index 2: blue
// Color at index 3: yellow

// Modifying existing array values using forEach
colors.forEach((color, index, arr) => {
  arr[index] = color[0].toUpperCase() + color.slice(1);
});
console.log(colors); // Output: ['Red', 'Green', 'Blue', 'Yellow']
