const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require("body-parser");

mongoose.connect('mongodb+srv://1:1@cluster0.awtvh5m.mongodb.net/nm?retryWrites=true&w=majority',{
   
}).then(con=>{
    
    console.log("connected database");
})

const db = mongoose.connection;


app.use(bodyparser.urlencoded({extended: true}));


app.set("view engine","ejs");

app.use('/', require('./server/routes/router'))

app.listen(10000, ()=> { console.log("sucess")});