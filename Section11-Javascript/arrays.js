var list = ["tiger", "cat", "bear", "bird"]
console.log(list[0]);
var numbers = [1,2,3,4];
var booleans = [true, false, true, true];
var functions = [function apple() 
    {console.log(apple);
    }]

var mixedList = ["apples", 20, undefined, false, function abc(){
     console.log("abc")
    }]

var arrayarray = [["tiger", "bear", "dog"], "cat"];
console.log(arrayarray[0][2]);
console.log(arrayarray[1]);

console.log("Original: " + list);
list.shift();
console.log("Shift: " + list);
list.push("owl");
console.log("Push: " + list)
list.pop();
console.log("Pop: " + list);
list.sort();
console.log("Sort: " + list);
newList = list.concat(["worm", "ant"]);
console.log("NewListConcat: " + newList);
list.reverse();
console.log("List Reversed: " + list);