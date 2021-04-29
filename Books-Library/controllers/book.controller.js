const bookModel = require('../models/book.model');

const bookController = {
    create: (req, res) => {
        let book = {
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename
        };

        bookModel.create(book, (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                code: '200',
                data: results
            });
        });
    },

    get: (req, res) => {
        bookModel.getAll((err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                code: '200',
                data: results
            });
        });
    },
    getLast: (req, res) => {
        bookModel.getLast((err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send({
                code: '200',
                data: results
            });
        });
    }
};

module.exports = bookController;
