let Product = require("../models/Product");

//GET all products
const getAllProducts = function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
}

//GET product by ID
const getProductById = function(req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        res.json(product);
    });
}

//ADD new product
const addProduct = function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'product added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
}

//UPDATE product by ID
/*
const updateProductById = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else
            product.product_name = req.body.product_name;
            product.product_description = req.body.product_description;
            product.product_price = req.body.product_price;
            product.product_stock = req.body.product_stock;
            product.product_featured_image = req.body.product_featured_image;
            product.product_category = req.body.product_category;

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
*/

const deleteProduct = (req, res) => {
    Product.findByIdAndRemove({
            _id: req.params.id,
        },
        (err, products) => {
            if (err) res.json(err);
            else res.json("Successfully removed");
        }
    );
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    // updateProductById,
    deleteProduct
};