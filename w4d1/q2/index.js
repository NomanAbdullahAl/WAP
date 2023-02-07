const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.urlencoded());
app.use(cookieParser());
app.use("/css",express.static(path.join(__dirname,"css")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/result",(req,res)=>{
    let{name,age} = req.body;
    res.cookie('name',name);
    res.cookie('age',age);
    res.redirect(`/output`)
})

app.get("/output",(req,res)=>{
    let {name,age} = req.cookies;
    res.send(`Welcome ${name}!! You are ${age}`)
})

app.listen(3000);