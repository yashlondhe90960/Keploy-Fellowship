const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

fs = require('fs');
app.get('/', (req, res) => {
    res.end('Hello everyone this is Yash');
});
app.get('/learning', (req, res) => {
    res.end("Here,I've created a book api. Here it is (/list_books).");
});
app.get("/list_books", (req, res) => {
    fs.readFile(__dirname + '/' + 'data.json', (err, data) => {
        res.end(data);
    });
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log("db connected");

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
