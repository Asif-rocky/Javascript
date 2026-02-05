// Get Elements By Tag Name
const heading1 = document.getElementsByTagName("h1");
console.log(heading1); // Logs a live HTMLCollection of all <h1> elements

heading1[0].style.color = "blue"; // Changes the color of the first <h1> element to blue

// Get Elements By Id
const mySelectedId = document.getElementById("myId");
console.log(mySelectedId); // Logs the element with the specified ID

// Get Elements By Class Name
const mySelectedClass = document.getElementsByClassName("myClass");
console.log(mySelectedClass); // Logs a live HTMLCollection of all elements with the specified class name

// Query Selector
const myQuerySelectorUsingClass = document.querySelector(".cls-1");
console.log(myQuerySelectorUsingClass); // Logs the first element that matches the specified CSS selector
const myQuerySelectorUsingId = document.querySelector("#id-1");
console.log(myQuerySelectorUsingId); // Logs the element with the specified ID

//Query Selector All
const myQuerySelectorAllUsingClass = document.querySelectorAll("ul>li");
console.log(myQuerySelectorAllUsingClass); // Logs a static NodeList of all elements that match the specified CSS selector
