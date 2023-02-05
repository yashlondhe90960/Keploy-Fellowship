const express = require("express");
const app = express();
const mongoose =require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());

//middle ware
const postRoute = require('./routes/posts');

app.use("/posts", postRoute);


app.get('/',(_req,res)=>{
    res.send("I am inside the home");

});



//connect mongo db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, 
() => {
    console.log("db connected");

}
);


app.listen(3000);