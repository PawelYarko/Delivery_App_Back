const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SEND_GRID_KEY, EMAIL_FROM, EMAIL_TO} = process.env;

sgMail.setApiKey(`SG.${SEND_GRID_KEY}`);

const generateHtml = require("../html/generateHtml")

const sendEmail = async (customer, orders) => {
  const emailBody = generateHtml(customer, orders);
  const mail = {
    to: EMAIL_TO,
    from: EMAIL_FROM,
    subject: 'Order',
    html: emailBody,
  };

  try {
    await sgMail.send(mail);
    return true;
  } catch (error) {
    throw error.message;
  }
};

module.exports = sendEmail;