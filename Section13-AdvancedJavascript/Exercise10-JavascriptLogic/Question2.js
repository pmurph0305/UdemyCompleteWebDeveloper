// Question 2: Write a javascript function that takes an array of numbers
//  and a target number. The function should find two different numbers 
//  in the array that, when added together, give the target number. 
//  For example: answer([1,2,3], 4)should return [1,3]

function answer(array, value) {
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] + array[j] === value && array[i] != array[j]) {
                return [array[i],array[j]];
            }
        }
    }
}

console.log(answer([1,2,3], 4));