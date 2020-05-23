const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/ProductController");

//get all products route
productRoutes.route("/all").get(productController.getAllProducts);

//get product by ID
productRoutes.route('/:id').get(productController.getProductById);

//add new product
productRoutes.route('/add').post(productController.addProduct);

//update product by ID
//productRoutes.route('/update/:id').post(productController.updateProductById);

//DELETE product my id
productRoutes.route("/delete/:id").delete(productController.deleteProduct);

module.exports = productRoutes;