const express = require('express');

const app= express();

const db= require('./db');

const bodyParser= require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/Person');

app.get('/',function(req, res){
    res.send('Welcome to my hotel... How i can help you? , we have list of menus')
})




app.listen(3000,()=>{
    console.log('listening on port 3000');
});

