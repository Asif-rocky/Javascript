const person = {
  name: "Asif",
  age: 25,
  city: "Bengaluru",
  skills: ["JavaScript", "HTML", "CSS", "C#", "SQL", ".Net", "Angular"],
  isEmployed: true,
};

const jsonString = JSON.stringify(person); // Convert JS object to JSON string
console.log(jsonString);

// Parse JSON string back to JS object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
