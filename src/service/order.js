const {Order} = require("../models/order/order");

const addOrder = async (orders, id) => {
    const allOrders = [];
    for(const order of orders){
        const body = {...order, owner:id};
        const newOrder = new Order(body)
        await newOrder.save();
        allOrders.push(newOrder);
    }
    return allOrders;
}

module.exports = {
    addOrder
}