//requires
const express = require('express');
const bodyParser = require('body-parser');

// create an express app.
const app = express();
//serving a static page..
app.use(express.static(__dirname+'/public'))

// listen on port 8080.
app.listen(8080);

// Routing: 
// app.get(path (request, response) => { });

// Get request route for root
app.get('/', (req, res) => {
    console.log("Does not run on a static page.");

    // from a GET querystring (?thing=value&&thing2=value)
    console.log(req.query)
    // req.body
    //console.log(req.headers)
    // app.get(''/:id/:ip')
    // console.log(req.params)

    //res.status(404).send("Not Found");
})