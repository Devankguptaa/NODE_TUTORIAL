const express = require('express');

const app= express();

const db= require('./db');

const passport=require('./auth');







const bodyParser= require('body-parser');
app.use(bodyParser.json()); //req.body

//Middleware Function
const logRequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); //Move on the next phase
}

app.use(logRequest);



app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session:false});

app.get('/',function(req, res){
    res.send('Welcome to our Hotel');
})

  




// Import the router files and use the routers

const personRoutes= require('./routes/personRoutes');
app.use('/person',personRoutes);


const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);


app.listen(3000,()=>{
    console.log('listening on port 3000');
});

