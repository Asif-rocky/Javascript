const input = document.querySelector("input");

// //key press
// input.addEventListener("keypress", () => {
//   console.log("key pressed !");
// });

// //key up (This event will be listened when you release a key press)
// input.addEventListener("keyup", () => {
//   console.log("key up !");
// });

// //key down (Similar to key press)
// input.addEventListener("keydown", () => {
//   console.log("key down !");
// });

// Useful properties and methods
input.addEventListener("keypress", (e) => {
  //   console.log(e.charCode);
  // console.log(e.ctrlKey);
  console.log(e.shiftKey);
});
