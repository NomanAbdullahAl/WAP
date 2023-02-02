const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.use("/result",(req,res)=>{
    let{name,age} = req.body;
    res.send(`Welcome ${name}!! You are ${age}`);
})

app.listen(3000);