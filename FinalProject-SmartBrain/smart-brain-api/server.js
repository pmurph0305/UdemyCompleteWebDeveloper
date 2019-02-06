const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

// parse body for json.
app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'testname',
            email: 'test@test.com',
            password: 'test',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'abc',
            email: 'abc@abc.com',
            password: 'abc',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'test@test.com'
        }
    ]
}

app.listen(8080, () => {
    console.log("Listening..");
});

app.get('/', (req, res) => {
    res.send(database.users);
});

app.put('/image', (req,res) => {
    const { id } = req.body;
    // see if user exists
    database.users.forEach(user => {
        if (user.id === id) {
            // increase and return user entries
            found = true;
            user.entries += 1;
            return res.json(user.entries);
        }
    });
    // if no user is found return 400 user not found
    if (!found) {
        res.status(400).json('User not found.');
    }
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    // see if user exists, return it if it does.
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    });
    // if no user is found return 400 user not found
    if (!found) {
        res.status(400).json('User not found.');
    }
});

app.post('/register', (req, res) => {
    const { email, name, password} = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
    });
    return res.json(database.users[database.users.length-1]);
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json(database.users[0]);
    } else {
        res.status(400).json("Error logging in")
    }
});

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
//     console.log(hash);
// });
// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });