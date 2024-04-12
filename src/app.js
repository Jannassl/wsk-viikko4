'use strict'

import express from 'express';
import api from './api/index.js';

const app = express();


app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', api);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
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

export default app;