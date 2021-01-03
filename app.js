const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

//Import routes
const postRouter = require('./routes/posts');

//Middlewares
app.use(bodyParser.json());
app.use('/posts', postRouter);

//ROUTES
app.get('/',(req,res) => {
    res.send('Hello JS');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true}).catch(err => console.log(err));

//How to start listening
app.listen(3000);