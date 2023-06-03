const {Schema, model} = require("mongoose");
const Joi = require("joi");

const { handlerErrors } = require("../../helpers");
                    
const productSchema = new Schema({
  shopTitle:{
    type: String,
    required: true
  },
  productTitle:{
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ammount: {
    type: Number,
    default: false,
    required: true
  }, 
}, {versionKey: false, timestamps: true});

productSchema.post("save", handlerErrors);

const addSchema = Joi.object({
  shopTitle: Joi.string().required(), 
  productTitle: Joi.string().required(),
  img: Joi.string().required(), 
  price: Joi.number().required(),
  ammount: Joi.number().required(),
});

const schemas = {
  addSchema,
};

const Product = model("product", productSchema);

module.exports = {
  Product,
  schemas
};