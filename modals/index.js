const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {

}
db.mongoose = mongoose
db.Products = require('./Product.modal')


module.exports = db;
