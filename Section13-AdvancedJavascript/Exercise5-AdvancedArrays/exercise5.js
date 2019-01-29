// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
forEachNamesEx = [];
const addExclamationMarks = array.forEach((user) => {
    forEachNamesEx.push(user.username + "!");
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapNamesQ1 = array.map(user => {
    return user.username + "?";
});
const mapNamesQ2 = array.map(user => user.username + "?");

//Filter the array to only include users who are on team: red
const filterRed1 = array.filter(user => {
    return user.team === "red";
});

const filterRed2 = array.filter(user => user.team === "red");

//Find out the total score of all users using reduce
const reduceScore1 = array.reduce((accumulator, user) => {
    return accumulator + user.score;
}, 0);

const reduceScore2 = array.reduce((acc, user) => acc + user.score, 0);

// (1), what is the value of i? // the current index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const addExToAllItems = array.map(user => {
    //with deconstructing.. 
    let {username, team, score, items} = user;
    // map items to new array, adding a !
    newItems = items.map(item => item + "!");
    // return values.
    return {username, team, score, newItems};
});