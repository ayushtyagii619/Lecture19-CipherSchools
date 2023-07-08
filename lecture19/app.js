const express = require('express');
const app  = express();

app.get('/', (req, res)=>{
    res.send("home");
})
app.get('/about', (req, res)=>{
    res.send("about");
})
app.get('/contact', (req, res)=>{
    res.send("contact");
})
app.listen(3000, ()=>{
    console.log("listen on 3000");
})