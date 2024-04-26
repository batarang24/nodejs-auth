const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
//

// database connection
const uri='mongodb+srv://naren:hello123@cluster0.hedlmiz.mongodb.net/untitled';
const PORT=process.env.PORT||3000
mongoose.connect(uri,{})
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.send('Hello world'));
app.use(router)
app.use(cookieParser);
