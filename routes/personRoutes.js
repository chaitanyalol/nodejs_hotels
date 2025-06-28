const express = require('express');
const router = express.Router();
const Person = require('./../models/Person'); //import person module from Person.js
//Post new people  in people schema in the database.
router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newPerson= new Person(data);
        const savedPerson=await newPerson.save();
        console.log('Data saved in the  database')
        res.status(200).json(savedPerson);  
    }catch(err){
        console.log(err);
        //res.status(500).send({error:'Internal server  error'});
        res.status(500).json(err);
    }
 })
//Get all the people  from the database.
 router.get('/',async(req,res)=>{
    try{
        const users = await Person.find();
        res.send(users);
    }catch(err){
        res.status(500).send(err);
    }
 })

 // Get person by the  work type
 router.get('/:workType',async(req,res)=>{
    try{
         const workType=req.params.workType; //extract the  worktype from URL parameter
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
const response = await Person.find({work:workType});
res.status(200).json(response);
    }else{
        res.status(404).json({error:'Invalid work type'});
    }
    }catch(err){
console.log(err);
res.status(500).json(err);
    }
   
 })

 module.exports = router;