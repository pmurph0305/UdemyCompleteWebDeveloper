const input = "This string is an example";
const splitinput = input.split(' ');
const json = JSON.stringify(splitinput);
console.log(splitinput);
// split input : [ 'This', 'string', 'is', 'an', 'example' ]
console.log(json);
// stringified : ["This","string","is","an","example"]

let onserver = JSON.parse(json);
let exampleData = [];
// Example data {word: "word", number: 5}
onserver.forEach((element, index) => {
    console.log(element);
    //select number from worddb where word = word...
    exampleData.push({
        word: element,
        id: index //index is for example, use database number
    });
});

console.log(exampleData);
// [ { word: 'This', id: 0 },
//   { word: 'string', id: 1 },
//   { word: 'is', id: 2 },
//   { word: 'an', id: 3 },
//   { word: 'example', id: 4 } ]

//return response with res.json(exampleData)

