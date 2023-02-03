const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.get("/",(req,res)=>{
    res.render("index");
})

app.use("/result",(req,res)=>{
    let{name,age} = req.body;
    res.render("output",{
        name:name,
        age:age
    });
})

app.listen(3000);