// change everything below to the newer Javascript!

// let + const
//old:
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';
// new:
let a = 'test';
const b = true;
const c = 789;
a = 'test2';



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
// Old:
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

// New:
let {firstName, lastName, age, eyeColor } = person;

// Object properties

var a = 'test';
var b = true;
var c = 789;

// Old:
// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };

// New: 
let okObj = {
    a, b, c
};


// Template strings
let firstName = "Bob"
let city = "Toronto"
//var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
//Old:
// function isValidAge(age) {
//     return age
// }

//New:
function isValidAge(age=10) {
    return age;
}


// Symbol
// Create a symbol: "This is my first Symbol"
let aSymbol = Symbol("This is my first Symbol");
let bSymbol = Symbol("This is my first Symbol");
let cSymbol = Symbol(1+3);

// Arrow functions
// Old
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
// New
const whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost!";
