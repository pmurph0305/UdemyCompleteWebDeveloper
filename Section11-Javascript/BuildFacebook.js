var database = [
    {
        username: "patrick",
        password: "test"
    }
];

var newsFeed = [
    {
        username: "jeff",
        timeline: "example timeline entry"
    },
    {
        username: "sarah",
        timeline: "sarahs example entry is this one."
    }
];

var usernamePrompt = prompt("Enter username.");
var passwordPrompt = prompt("Enter your password");

function login(user, pass) {
    if (database[0].username === user && database[0].password === pass) {
        console.log(newsFeed);
    } else {
        alert("Wrong username or password.");
    }
}

login(usernamePrompt, passwordPrompt);
