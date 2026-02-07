const h1 = document.querySelector("h1");

//classList
console.log(h1.classList);

//addClass
h1.classList.add("styles"); // add class "styles" to the h1 element

//removeClass
h1.classList.remove("styles"); // remove class "styles" from the h1 element

// add or remove class using toggle
h1.classList.toggle("styles"); // if the class "styles" is not present, it will be added; if it is present, it will be removed
//h1.classList.toggle("styles");
