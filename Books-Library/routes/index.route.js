const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.get);

router.get('/book', (req, res) => {
    res.render(
        'book', {
            title: 'titulo'
        }
    );
});

module.exports = router;