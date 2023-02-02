const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded());

app.use("/css",express.static(path.join(__dirname,"css")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/result",(req,res)=>{
    let{name,age} = req.body;
    res.redirect(`/output?name=${name}&&age=${age}`)
})

app.get("/output",(req,res)=>{
    let {name,age} = req.query;
    res.send(`Welcome ${name}!! You are ${age}`)
})

app.listen(3000);