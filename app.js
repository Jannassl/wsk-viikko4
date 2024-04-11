'use strict'

import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/api/v1/cat', (req,res) => {
    res.send(cat);
});

const cat = {
    cat_id : 1,
    name : "Vili",
    birthdate : "13.5.2020",
    weight : 3 + "kg",
    owner : "Heikki Lamminen",
    Image : "https://loremflickr.com/320/240/cat"
}