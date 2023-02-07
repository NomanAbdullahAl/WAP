const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session");
app.use(session({
    secret : "mysecret",
    resave:false,
    saveUninitialized:false
}));

app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.get("/",(req,res)=>{
    const products =[
        {
            id:1,
            name:"Mango",
            price:12,
            description:"This is from Mexico"
        },
        {
            id:2,
            name:"Banana",
            price:12,
            description:"This is from USA"
        },
        {
            id:3,
            name:"Orange",
            price:12,
            description:"This is from Mexico"
        }
]
    res.render("product",{
        products:products
    });
})
app.post('/addToCart',(req,res)=>{
    let {name,price} = req.body;
    price = parseInt(price);
    let cart = {};
    if(req.session.cart) cart = req.session.cart;

    if(!cart[name]){ 
        cart[name] = {price : price, quanity: 1}
    }
    else{
        cart[name] = {price : cart[name].price+ price, quanity: 1 + cart[name].quanity}
    }
    req.session.cart = cart;
    res.send("You product has been carted");
})

app.listen(3000);