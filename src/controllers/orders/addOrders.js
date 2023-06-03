const addCustomer = require("../../service/customer");
const addOrder = require("../../service/order");

const addOrders = async (req, res) =>{
    const {name, email, phone, address} = req.body;
    
    const result = await Customer.create(req.body);
    res.status(201).json(result);
}

module.exports = add;