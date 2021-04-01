const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render(
        'index', {
            title: 'titulo'
        }
    );
});

router.get('/book', (req, res) => {
    res.render(
        'book', {
            title: 'titulo'
        }
    );
});

module.exports = router;