// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// trim removes blank space from both sides of the string.
// add's '='s to the end of the turtle string until the string is 9 characters long.


// #3) Get the below object to go from:
let obj = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
let result = "";
Object.entries(obj).map(value => {
	result += value[0] + " " + value[1] + " ";
})
result = result.trim();

// using .join, first joints each entry, ie my + name to "my name", then joins "my name" and "is Rudolf"
let result2 = Object.entries(obj).map(value => value.join(" ")).join(" ");

console.log(result);
console.log(result2);