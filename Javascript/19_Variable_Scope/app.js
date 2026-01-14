// Global variables
var globalVar = "I am a global variable";
let anotherGlobalVar = "I am another global variable";

function checkScope() {
  // Local variables
  var localVar = "I am a local variable";
  let anotherLocalVar = "I am another local variable";
  console.log(globalVar); // Accessible
  console.log(anotherGlobalVar); // Accessible
  console.log(localVar); // Accessible
  console.log(anotherLocalVar); // Accessible
}
checkScope();

console.log(globalVar); // Accessible
console.log(anotherGlobalVar); // Accessible
// console.log(localVar); // Unaccessible, will throw ReferenceError
// console.log(anotherLocalVar); // Unaccessible, will throw ReferenceError
