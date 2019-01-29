var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array.sort();
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
// 4. Remove "Apples" from the array.
array.shift();
// 5. Sort the array in reverse order. (Not alphabetical, but reverse)
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0])