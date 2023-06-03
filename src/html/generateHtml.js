const moment = require("moment");

const generateHtml = ({name, email, address, phone}, orders) =>{
    return `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <p>Date of order: ${moment().format('MM-DD-YYYY HH:mm:ss')}</p>

    <h3>Order</h3>
    ${orders.map(({shopTitle, productTitle, price, ammount, totalPrice}) =>{
       return `<p>Shop: ${shopTitle}</p>
               <p>Product: ${productTitle}</p>
               <p>Price: ${price}</p>
               <p>Ammount: ${ammount}</p>
               <p>TotalPrice: ${totalPrice}</p>` 
    })}`;
}

module.exports = generateHtml;