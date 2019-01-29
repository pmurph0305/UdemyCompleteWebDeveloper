var todos = [
    "tidy room",
    "shower",
    "brush teeth",
    "go for a walk",
    "get 8 hours of sleep"
];

var todos2 = [
    "tidy room!",
    "shower!",
    "brush teeth!",
    "go for a walk!",
    "get 8 hours of sleep!"
];

// for loops
// for (var i = 0, length = todos.length; i < length; i++)
// {
//     todos.pop();
// }

// Do and do while loops
// var counter = 10;
// while (counter > 10) {
//     console.log("while");
//     console.log(counter);
//     counter--;
// }
// var counter2 = 10;
// do {
//     console.log("do while");
//     console.log(counter2);
//     counter2--;
// } while (counter2 > 10);

//Foreach loop
// todos.forEach(function(item, i) {
//     console.log(item, i);
// });

//foreach functions
todos.forEach(logTodos);
todos2.forEach(logTodos);

function logTodos(todo, i) {
    console.log(todo, i);
}
