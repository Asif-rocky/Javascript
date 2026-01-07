//Declared variable
let name;
console.log(name); //undefined

//Initialization
name = "Asif";
console.log(name); //Asif

//Assignment
let height = 180;

//We cannot use reserved keyowrds as variable names
// let var = 'Asif';
// let class = 'Dummy';
// let function = 'You';

//We cannot use spaces or numbers at start in variable names
// let my name = "Asif";
// let 10Kgs = '10kgs';

// Correct way
let myName = "Asif"; //Best convenction way to write variable name
let kgs10 = "10Kgs";
let _myService = "My Service";
let my_service = "My Service";
let MYSEVRICE = "My Service";

//We can change value of let but not for const
let youtubeChannel = "mrbeast";
youtubeChannel = "Asif"; // ✔
console.log(youtubeChannel);

const famousPerson = "mrbeast";
// famousPerson = "Asif"; // ✘
