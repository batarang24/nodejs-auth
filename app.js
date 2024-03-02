const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/authRoutes');

const app = express();
app.use(express.json());


// database connection
const uri='mongodb+srv://naren:hello123@cluster0.hedlmiz.mongodb.net/untitled';
mongoose.connect(uri,{})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.send('Hello world'));
app.use(router)