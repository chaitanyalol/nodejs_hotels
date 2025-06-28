const express = require('express');
const router = express.Router();

const drinks = require('./../models/drinks');

router.post('/',async(req,res)=>{
    try{
const data = req.body;
const newdrinks = drinks(data);
const saveddrinks = await newdrinks.save();
res.status(200).json(saveddrinks);
    }catch(err){
res.status(500).json({ error: err.message});
    }
})

router.get('/',async(req,res)=>{
    try{
        const getdrinks = await drinks.find();
        //res.send(getdrinks);
        res.status(200).json(getdrinks);
    }catch(err){
        console.log(err);
        res.send(500).json(err);
    }
})

router.put('/:id',async(req,res)=>{
    try{
const drinksid = req.params.id;
const updatedrinksdata = req.body;
const response = await drinks.findByIdAndUpdate(drinksid,updatedrinksdata,{
    new:true, //return the updated document
    runValidators:true
})
if (!response){
    console.log("Drink not  found")
    res.status(400).json({error: 'Drink not found'})
}
 console.log("Drinks menu updated");
 res.status(200).json(response);
    }catch(err){
console.log(err);
res.status(500).json(err);
    }
})

router.delete('/:id',async(req,res)=>{
    try{
const drinksid = req.params.id;

const response = await drinks.findByIdAndDelete(drinksid)
if(!response){
 console.log("Drink not  found")
    res.status(400).json({error: 'Drink not found'})
}else{
    res.status(200).json({message:"Drink deleted  successfully"})
}
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;