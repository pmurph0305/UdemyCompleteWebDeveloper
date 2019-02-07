const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'smartbrain'
    }
});

const app = express();

// parse body for json.
app.use(bodyParser.json());
app.use(cors());

app.listen(8080, () => {
    console.log("Listening..");
});

app.get('/', (req, res) => {
    res.send(database.users);
});

app.put('/image', (req,res) => {
    const { id, faces } = req.body;
    console.log(faces);
    // select user and update entries.
    db('users').where('id', '=', id)
        .increment({
            entries: faces
        })
        .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('Unable to get entries.'));
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*')
        .from('users')
        .where({
            id
        })
    .then(user => {
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(400).json('User not found.')
        }
    })
    .catch(err => res.status(400).json('Bad request'))
});

app.post('/register', (req, res) => {
    const { email, name, password} = req.body;
    const hash = bcrypt.hashSync(password);
    //transactions used to insert into login and users table
    // so that if one fails, both fail (trx.rollback)
    // if both succeed trx.commit is called to commit both inserts.
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    email: loginEmail[0],
                    name: name,
                    joined: new Date()
                })
                .then(user => {
                    res.json(user[0]);
                })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
        
        .catch(err => res.status(400).json('Unable to register.'));
})

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash); 
        if (isValid) {
            return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
                res.json(user[0]);
            })
            .catch(err => res.status('400').json('Unable to get user'));
        } else {
            res.status('400').json('Incorrect login info.');
        }
    })
    .catch(err => res.status('400').json('Incorrect login info.'));
});