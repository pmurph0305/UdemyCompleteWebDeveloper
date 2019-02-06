// Find final floor santa ends up on.
// ( means go up one floor
// ) means he should go down one floor.
// Find when santa first enters basment (negative floor)

const fs = require('fs');

console.time('timer');

//the stairs from the input.txt file.
let stairs = fs.readFileSync('./input.txt').toString();
// current story/floor santa is on
let story = 0;
// for when he enters basement
let basement = 0;
// go through every character
for (let i = 0; i < stairs.length; i++)
{
    // go up if its a (
    if (stairs[i] === '(') {
        story += 1;
    // go down if it's a )
    } else if (stairs[i] === ')') {
        story -=1;
    }
    // if he enters basement, log the character this happens.
    if (story < 0 && basement === 0) {
        basement = i + 1;
    }
}
console.timeEnd('timer')
console.log("Ended up at floor:" + story);
console.log("Entered basement at:" + basement);



