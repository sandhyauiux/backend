const productController = require('../controllers/Product.controller')
module.exports = function (app) {
    app.post('/create-Products', productController.createProduct)
}
