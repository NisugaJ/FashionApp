const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/ProductController");
const Utils = require("../common/CommonUtils")
const Definitions = require("../definitions/Defs").Definitions

//GET all products route
productRoutes.route("/").get(productController.getAllProducts);

//GET product by ID
productRoutes.route('/:id').get(productController.getProductById);

//ADD new product
productRoutes.route('/add').post(Utils.authenicateToken(Definitions.clientTypes.store_manager), productController.addProduct);

//UPDATE product by ID
productRoutes.route('/update/:id').post(productController.updateProductById);

//DELETE product my id
productRoutes.route("/deleteProduct/:id").get(Utils.authenicateToken(Definitions.clientTypes.store_manager), productController.deleteProduct);

//VIEW only one product
productRoutes.route("/oneProduct/:id").post(productController.viewOneProduct);

//UPLOAD image - Using the cloudinary widget, so this won't be used, incase widget doesn't work the back end is here.
productRoutes.route("/upload").post(Utils.authenicateToken(Definitions.clientTypes.store_manager), productController.uploadImage);

//ADD review
productRoutes.route('/update/:id').post(productController.addReview);

module.exports = productRoutes;