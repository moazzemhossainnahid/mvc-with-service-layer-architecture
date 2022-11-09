const express = require('express');
const router = express.Router();


const productController = require("../Controllers/Product.controller");



router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)


router.route('/:id')
.patch(productController.updateProduct)
.patch(productController.bulkUpdateProduct)
.delete(productController.deleteProduct)

module.exports = router;