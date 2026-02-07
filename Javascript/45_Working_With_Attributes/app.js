const a = document.querySelector("a");

/* Getting Attributes */

//href is an attribute of the anchor tag
console.log(a.href);
const input = document.querySelector("input");
//value is an attribute of the input tag
console.log(input.value);
//type is an attribute of the input tag
console.log(input.type);

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

/* Setting Attributes */
a.href = "https://twitter.com";
input.value = "Hello World";
input.value = "";
input.type = "password";

input.setAttribute("placeholder", "Password");
input.setAttribute("type", "text");
