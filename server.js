const express = require('express');
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",(req,res)=>{
    res.send("This is from express server.");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))