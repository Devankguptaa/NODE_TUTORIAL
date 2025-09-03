const express = require('express');

const app= express();

const db= require('./db');

const bodyParser= require('body-parser');
app.use(bodyParser.json()); //req.body

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

app.get('/',function(req, res){
    res.send('Welcome to my hotel... How i can help you? , we have list of menus')
})

app.post('/person', async (req,res)=>{


    try{

        const data = req.body //Assuming the request body contains the person data

    //Cretae a new Person document using the mongoose model

     const newPerson = new Person(data);

     //save the newPerson to the database

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);


    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }

})

//GET method to get the person

app.get('/person',async (req,res)=>{

    try{

        const data= await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }



})


app.listen(3000,()=>{
    console.log('listening on port 3000');
});

