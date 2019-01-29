// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove)
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types.
//  i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let array2 = [1, "2", "3", 2];

function answer(array) {
    let newArray = [];

    let numbers = array.filter(val => typeof(val) === 'number');
    let strings = array.filter(val => typeof(val) === 'string');
    console.log(numbers);
    console.log(strings);

    if (numbers.length > 0) {
        numbers.sort(function(x, y){ return x - y });
        newArray.push(groupSortedArray(numbers));
    }

    if (strings.length > 0) {
        strings.sort();
        newArray.push(groupSortedArray(strings));
    }
    return newArray;
}

function groupSortedArray(array) {
    let groupedArray = [];
    currentValue = array[0];
    let group = [];
    array.forEach(function(value) {
        if (value === currentValue) {
            group.push(currentValue);
        } else {
            if (group.length > 1) {
                groupedArray.push(group);
            } else {
                groupedArray.push(currentValue);
            }
            group = [];
            currentValue = value;
            group.push(currentValue);
        }
    });
    if (group.length > 1) {
        groupedArray.push(group);
    } else {
        groupedArray.push(currentValue);
    }
    return groupedArray;
}

let answer1 = answer(array1);
let answer2 = answer(array2);

console.log(answer1);
console.log(answer2);