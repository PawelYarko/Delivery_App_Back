const { Product } = require("../../models/products/products");

const getProducts = async (req, res) => {
    // const result = await Product.getAll();
    // res.json(result);
    res.send('get product');
}

module.exports = getProducts;