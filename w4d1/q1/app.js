const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());


app.get("/",(req,res)=>{
    let cookies = req.cookies;
    res.render("addCookie",{cookies:cookies});
})

app.post("/addCookie",(req,res)=>{
    let{key,value} = req.body;
    res.cookie(key,value);
    res.redirect("/");
})

app.listen(3000)