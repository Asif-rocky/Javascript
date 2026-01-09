//Strings
let firstName = "Asif";
let lastName = "Ali";

console.log(firstName + lastName);
console.log(firstName + " " + lastName);

let newLineText = "I am in new line";
let specialText = `This string is written using backticks so that below text is in new line
${newLineText}`;

console.log(specialText);

// 1.Concatenation
let fullName = firstName.concat(lastName);
console.log(fullName); //AsifAli

// 2.Append
let someText = firstName;
someText += " will become successful in upcoming years";
console.log(someText); //Asif will become successful in upcoming years

// 3.Length
console.log(firstName.length); //4

// 4.Cases
console.log(firstName.toLowerCase()); //asif
console.log(firstName.toUpperCase()); //ASIF

// 5.Slice
console.log(firstName.slice(0, 3)); //Asi

// 6.Split & Join
console.log(firstName.split("")); //['A', 's', 'i', 'f']
console.log(firstName.split("").join(",")); //A,s,i,f

// 7.Includes
console.log(firstName.includes("i")); //true

// 8.Trim
let junkText = "    Hey   How are you !!!  ";
console.log(junkText.trim()); //Hey   How are you !!!
