require("dotenv").config();
const express=require("express");
const app=express();
const port=3000||process.env.PORT;
app.get("/",(req,res)=>{
    res.send("this is working");
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})