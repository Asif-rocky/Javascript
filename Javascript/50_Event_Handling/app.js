let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

//click
one.addEventListener("click", () => {
  one.classList.toggle("red");
});

//contextmenu
two.addEventListener("contextmenu", () => {
  two.classList.toggle("blue");
});

//double click
three.addEventListener("dblclick", () => {
  three.classList.toggle("teal");
});

//mouse down
four.addEventListener("mousedown", () => {
  four.classList.toggle("steelblue");
});

//mouse enter
five.addEventListener("mouseenter", () => {
  five.classList.toggle("orange");
});

//mouse leave
six.addEventListener("mouseleave", () => {
  six.classList.toggle("purple");
});

//mouse move
seven.addEventListener("mousemove", () => {
  seven.classList.toggle("pink");
});

//mouse out
eight.addEventListener("mouseout", () => {
  eight.classList.toggle("crimson");
});

//mouse over
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("chocolate");
});

//mouse up
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("aqua");
});
