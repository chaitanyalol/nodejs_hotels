const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem')

// Post menu order in the database.
 router.post('/',async(req,res)=>{
    try{
const data=req.body;
const newmenuitem = MenuItem(data);
const savedmenuitem = await newmenuitem.save();
console.log('Menu saved in the database');
res.status(200).json(savedmenuitem);
    }catch(err){
console.log(err);
res.status(500).json(err);
    }
 })
//Display menu item in the  browser.
 router.get('/',async(req,res)=>{
    try{
const menuordered = await MenuItem.find();
res.send(menuordered)
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
 })

 module.exports = router;