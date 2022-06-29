//mvc patter
const mongoose = require('mongoose');


const Products = mongoose.model('Products', new mongoose.Schema({
    "name" : String,
    "description" : String,
}, {timestamps : true}));
//timestamps = it adds created updated time.

module.exports = Products;



