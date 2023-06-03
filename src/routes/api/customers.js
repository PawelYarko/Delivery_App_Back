const express = require('express');

const ctrl = require('../../controllers/customers/index');

const {ctrlWrapper} = require('../../helpers');

const {validationBody, isValidId} = require('../../middlewares');

const router = express.Router();

router.post("/", ctrlWrapper(ctrl.add));

module.exports = router;