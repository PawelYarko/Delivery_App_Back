const { Product } = require("../../models/product/product");

const getProducts = async (req, res) => {
    const result = await Product.find();
    res.json(result);
    console.log(result)
}

module.exports = getProducts;