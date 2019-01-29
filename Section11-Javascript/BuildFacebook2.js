var database = [
    {
        username: "patrick",
        password: "test"
    },
    {
        username: "sarah",
        password: "321"
    },
    {
        username: "jeff",
        password: "abc"
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

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username == user && database[i].password == pass) {
            return true;
        }
    }
    return false;
}

function login(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        console.log("Sorry wrong username or password.");
    }
}

login(usernamePrompt, passwordPrompt);
