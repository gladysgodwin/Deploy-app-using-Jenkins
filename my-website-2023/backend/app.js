const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');
app.use(cors());
app.use(bodyParser.json());
db.connect();
app.get('/result', (req, res) => {
  res.json('Thank you for reaching out, I will get back to you shortly');
});

app.post('/submit-data', (req, res) => {
  const { name, email, message } = req.body;

  //connect to database here

  res.json({message:'Thank you for reaching out, I will get back to you shortly'})
});

app.listen(port, () => {
  console.log(`Express app listening at http://34.251.191.7:${port}`);
});