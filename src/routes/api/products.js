const express = require('express');

const ctrl = require('../../controllers/products/index');

const {ctrlWrapper} = require('../../helpers');

const {validationBody, isValidId} = require('../../middlewares');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getProducts));

// router.get("/", (req, res) => {
//     res.json(products)
// });

// router.get("/:id", (req, res) => {
//     const {id} = req.params;
//     const result = products.find(item => item.id == id);
//     res.json(result);
// });

// router.post('/', authenticate, validationBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

module.exports = router;
