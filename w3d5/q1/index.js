const express = require('express');
const app = express();
app.get('/', (req, res) => {

 let {name ="person",age = 0 } = req.query;
 
 res.send(`Welcome ${name}!! You are ${age}`);
});

app.listen(3000);