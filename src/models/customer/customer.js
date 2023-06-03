const {Schema, model} = require("mongoose");
const Joi = require("joi");

const { handlerErrors } = require("../../helpers");

const emailRegexp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]{2,}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRegex =
  /^[\+]?[0-9]{2}[(]?[0-9]{3}[)]?[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
  
const messagePhoneRegex = {
'string.pattern.base':
    'Invalid phone number format! Example: +38(099)999-99-99',};

const customerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
      },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, 'Email is required'],
        unique: true,
      },
    phone:{
        type: String,
        match: phoneRegex,
        required: [true, 'Phone number is required'],
        unique: true,
      },
    address: {
        type: String,
        required: [true, 'Address is required'],
      },
}, {versionKey: false, timestamps: true});

customerSchema.post("save", handlerErrors);

const addSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().pattern(emailRegexp),
    phone: Joi.string()
    .length(17)
    .regex(phoneRegex)
    .message(messagePhoneRegex)
    .required(),
    address: Joi.string().required()
  });
  
  const schemas = {
    addSchema,
  };

const Customer = model("customer", customerSchema);

module.exports = Customer;