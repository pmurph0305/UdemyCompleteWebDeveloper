//require express.
const express = require('express');
// create an express app.
const app = express();
// listen on port 8080.
app.listen(8080);

//body-parser require
const bodyParser = require('body-parser');

// can have multiple app.use, like using body parser for urlencoded and json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// middleware use function example.
// this is ran on each request
app.use((req, res, next) => {
    console.log('Hello. app.use will run on each request!');
    // the next function passes the request on
    // so that requests can be processed by .get .post etc.
    next();
})

// Routing: 
// app.get(path (request, response) => { });

// Get request route for root
app.get('/', (req, res) => {
    res.send("getting root");
})

// get request route for /profile
app.get('/profile', (req, res) => {
    res.send("getting profile..");
})

// post request route for /profile.
app.post('/profile', (req, res) => {
    //res.send(user);
    console.log(req.body);
    const user = {
        name: 'FakeName',
        hobby: 'exampleHobby'
    }
    //res.send("hello.")
    res.send('Success');
})
