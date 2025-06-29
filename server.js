const express = require('express') //use Express server to build a new app server for listeening  to requests.
const app = express(); //Assign the server to variable app
const db = require('./db'); //Import db module  from file  db.js
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyParser=require('body-parser'); //Use a body parser to parse file types.E.g json
app.use(bodyParser.json()); //assign the body parser  to app

app.get('/', function(req,res){
    res.send('Hello World...Welcome to my world')
})

app.get('/login',function(req,res){
    res.send('This  is  the Login page')
})


 //Import the perso router files
 const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes')
app.use('/menuitems',menuRoutes);

const drinkRoutes = require('./routes/drinkRoutes.js');
app.use('/drinks',drinkRoutes);


//Server listen on port 3000
app.listen(PORT, ()=>{
    console.log("Server  is listening on port 3000");
})
