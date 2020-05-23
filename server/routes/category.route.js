
const express = require('express');
const categoryRoutes = express.Router();


let categoryController = require("../controllers/categoryController");

//add route
categoryRoutes.route("/add").post(categoryController.createCategory);

//get route
categoryRoutes.route('/').get(categoryController.getCategoryDetails);

//get edit route
categoryRoutes.route('/edit/:id').get(categoryController.getEditDetails);

//update route
categoryRoutes.route('/update/:id').post(categoryController.updateCategory);

//delete route
categoryRoutes.route("/delete/:id").get(categoryController.deleteCategory);


module.exports = categoryRoutes;