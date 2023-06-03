const Customer = require("../../models/customer/customer");

const add = async (req, res) =>{
    const result = await Customer.create(req.body);
    console.log(result);
    res.status(201).json(result);
}

module.exports = add;