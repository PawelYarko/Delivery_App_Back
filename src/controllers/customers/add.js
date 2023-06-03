const {addCustomer} = require("../../service/customer");
const {addOrder} = require("../../service/order");
const sendEmail = require("../../service/sendEmail");

const add = async (req, res) =>{
    const {name, email, phone, address, orders} = req.body;
    const customer = await addCustomer({name, email, phone, address});
    const order = await addOrder(orders, customer._id);
    await sendEmail(customer, orders);
    res.status(201).json({message:order});
}

module.exports = add;