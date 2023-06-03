// routy , connect bd (app + server)
const mongoose = require("mongoose");
require("dotenv").config();

const app = require('./app');

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
  .then(()=> app.listen(PORT,()=>{console.log('db start')}))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });