const express = require('express');
const router = express.Router();

const multer = require('../config/multer');
const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.get);
router.route('/book').post(multer.single('image'), bookController.create);

module.exports = router;