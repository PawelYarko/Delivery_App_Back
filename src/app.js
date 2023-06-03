const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// const contactsRouter = require('./routes/api/contacts');
// const authRouter = require("./routes/api/auth");
const productsRouter = require("./routes/api/products");
const customerSchema = require("./routes/api/customers");

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/auth", authRouter);
// app.use('/api/contacts', contactsRouter);
app.use("/api/products", productsRouter);
app.use("/api/customers", customerSchema);

app.get("/", (req, res)=>{
  res.send("server running")
})

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
  console.log(err);
  const {status = 500, message = 'Server error'} = err;
  res.status(status).json({ message })
})

module.exports = app;