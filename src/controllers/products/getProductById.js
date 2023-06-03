const { Product } = require("../../models/products/products")
const { RequestErr } = require("../../helpers");

const getProductById = async(req, res) => {
    const {id} = req.params;
    const result = await Product.findById(id);
    if(!result) {
        throw RequestErr(404, "Not found");
    }
    res.json(result);
}

  module.exports = getProductById;