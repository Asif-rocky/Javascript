//Creating ELement
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.classList.add("greetings");
console.log(h1);

//Append Element
const body = document.body;
body.appendChild(h1); //appends at the last

//Insert Before
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "I am Li tag";

const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi); // Inserts the new Li in the ul before the firstLi

//Insert Adjacent
const firstParagraph = document.querySelector("p");
const myITag = document.createElement("i");
myITag.innerText = "I am italics";
myITag.style.color = "skyblue";
firstParagraph.insertAdjacentElement("beforebegin", myITag); //inserts the i tag in new block before the firstParagraph begin
firstParagraph.insertAdjacentElement("afterbegin", myITag); //inserts the i tag in same inline as paragraph, i tag starts first and then paragraph
firstParagraph.insertAdjacentElement("beforeend", myITag); //inserts the i tag in same inline as paragraph, paragraph ends first and then i tag
firstParagraph.insertAdjacentElement("afterend", myITag); //inserts the i tag in new block after the paragraph end

let section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = "I am italics";
i.style.color = "skyblue";
section.append(i); //appends the i tag to the section

const anotherI = document.createElement("i");
anotherI.innerText = "I am another italic";
anotherI.style.color = "crimson";
section.prepend(anotherI); //prepends the i tag to the section

const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth); //remove the fourth element
newList.remove(); // remove all the elements inside the parent element
