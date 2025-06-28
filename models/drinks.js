const mongoose = require('mongoose');

const drinksschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        enum:[30,60,90,180],
        required:true
    }
})
const drinks = mongoose.model('drinks',drinksschema);
module.exports = drinks;