const Product = require("../Models/Product.model")

exports.getProductsService = async () => {
    const Products = await Product.find({});
    return Products;
};

exports.createProductService = async (data) => {
    const product = await Product.create(data);
    return product;
};

exports.updateProductService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $set: data }, {runValidators: true});
    return result;
};

exports.bulkUpdateProductService = async (data) => {
    const result = await Product.updateMany({ _id: data.ids }, data, {runValidators: true});
    return result;
};

exports.deleteProductService = async (productId) => {
    const result = await Product.deleteOne({ _id: productId });
    return result;
};