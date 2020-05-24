let Product = require("../models/Product");
let Rating = require("../models/Product");

//GET all products
const getAllProducts = function (req, res) {
    Product.find(function (err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
}

//GET product by ID
const getProductById = function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
}

//ADD new product
const addProduct = function (req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({ 'product': 'product added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
}

//UPDATE product by ID
const updateProductById = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.qty = req.body.qty;
            product.image_path = req.body.image_path;
            product.category_id = req.body.category_id;

            product.discount_percentage = req.body.discount_percentage;
            product.discount_info = req.body.discount_info;

            product.save().then(product => {
                res.json('Product updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
}

//Delete product
const deleteProduct = function (req, res) {
    Product.findByIdAndRemove({ _id: req.params.id }, function (err, product) {
        if (err) res.json(err);
        else res.json('Product Deleted Successfully');
    });
}

//VIEW only one product
const viewOneProduct = function(req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        res.json(product);
    });
}

//UPLOAD image - Using the cloudinary widget, so this won't be used, incase widget doesn't work the back end is here.
const uploadImage = function(req, res, next){
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, function(err, result){
        console.log(err),
        console.log(result),
        console.log(result.secure_url)
    });
}

//ADD review
const addReview = function(req, res) {
    Product.findById(req.params.id, function(err, product,rating) {
        if (!product)
            res.status(404).send("data is not found");
        else
            rating.comment = req.body.comment;
            rating.value = req.body.value;

            product.save().then(product => {
                res.json('Product updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProduct,
    viewOneProduct,
    uploadImage,
    addReview
};