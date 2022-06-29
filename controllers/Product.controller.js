const {Products} = require('../modals');

exports.createProduct = (req,res) =>{
    console.log('created product route')
    console.log(req.body)
    res.send("success")
};
