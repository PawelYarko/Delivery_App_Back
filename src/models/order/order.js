const {Schema, model} = require("mongoose");
const Joi = require("joi");

const { handlerErrors } = require("../../helpers");
                    
const orderSchema = new Schema({
  shopTitle:{
    type: String,
    required: true
  },
  productTitle:{
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  },
  ammount: {
    type: Number,
    default: 0,
    required: true
  }, 
  totalPrice: {
    type: Number,
    default: 0,
    required: true 
  },
  owner: {
    type: Schema.Types.ObjectId, 
    required: true,
    ref: 'customer'
  },
}, {versionKey: false, timestamps: true});

orderSchema.post("save", handlerErrors);

const addSchema = Joi.object({
  shopTitle: Joi.string().required(), 
  productTitle: Joi.string().required(), 
  price: Joi.number().required(),
  ammount: Joi.number().required(),
  totalPrice: Joi.number().required(),
});

const schemas = {
  addSchema,
};

const Order = model("order", orderSchema);

module.exports = {
  Order,
  schemas
};