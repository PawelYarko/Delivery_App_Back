const Customer = require("../models/customer/customer");

const getCustomerByEmail = async (email) => {
    return await Customer.findOne({email});
}

const addCustomer = async (body) => {
    const candidate = await getCustomerByEmail(body.email);
    if(candidate){
        return candidate;
    }
    const newCustomer = new Customer(body);
        await newCustomer.save();
        return newCustomer;
}

module.exports = {
    addCustomer
}