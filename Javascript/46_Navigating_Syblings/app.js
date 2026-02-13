let firstLi = document.querySelector("li");

//Accessing parent
console.log(firstLi);
console.log(firstLi.parentElement); //navigating to the parent element //Ex:- <ul>...</ul>
console.log(firstLi.parentElement.parentElement); //<body>...</body>
console.log(firstLi.parentElement.parentElement.parentElement); //<html>...</html>
console.log(firstLi.parentElement.parentElement.parentElement.parentElement); //null

//Accessing Children
let ul = document.querySelector("ul");
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);

//Siblings
console.log(firstLi.nextElementSibling.textContent); //2
console.log(firstLi.nextElementSibling.nextElementSibling.textContent); //3
console.log(
  firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
); //4

let fourthLi = document.querySelector(".fourth");
console.log(fourthLi.previousElementSibling.textContent); //3
