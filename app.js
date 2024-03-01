const express = require('express');
const mongoose = require('mongoose');

const app = express();



// database connection
//const uri='mongodb+srv://naren:hello123@cluster0.qdrgtar.mongodb.net/untitled';
const uri='mongodb+srv://naren:hello123@cluster0.hedlmiz.mongodb.net/untitled';
mongoose.connect(uri,{})
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.send('Hello world'));