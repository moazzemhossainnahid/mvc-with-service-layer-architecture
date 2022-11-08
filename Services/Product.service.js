const Product = require("../Models/Product.model")

exports.getProductsService = async() => {
    const Products = await Product.find({});
    return Products;
};

exports.createProductService = async() => {
    const Product = await Product.create(req.body);
    return Product;
};