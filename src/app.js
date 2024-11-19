const express=require("express");
const dbConnect =require('../src/config/db')
const app=express();
const todoRouter=require('./routes/todo')

app.use(express.json());
app.use('/',todoRouter);

//Connected to DB
dbConnect().then(()=>{
    console.log("Connected to DB Successfully")
    app.listen("3000",()=>{
        console.log("Your serever is running on port 3000")
    })
}).catch((err)=>{
    console(err.message)
})