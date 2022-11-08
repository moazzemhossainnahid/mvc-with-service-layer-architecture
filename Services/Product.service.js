const Product = require("../Models/Product.model")

exports.getProductsService = async() => {
    const Products = await Product.find({});
    return Products;
};

exports.createProductService = async(data) => {
    const product = await Product.create(data);
    return product;
};