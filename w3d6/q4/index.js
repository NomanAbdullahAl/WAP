const express = require('express');
const app = express();
const path = require('path');

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
];

res.render("product",{
        products:products
    });
});

app.post('/addToCart',(req,res)=>{
    res.render("shoppingcart",{
        product:req.body.product
    });
});

app.listen(3000);