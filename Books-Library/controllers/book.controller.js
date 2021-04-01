const bookModel = require('../models/book.model');

const bookController = {
    create: (req, res) => {
        bookModel.create(req.body, (err, results) => {
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

            res.status(200).render(
                'index', {
                    books: results,
                    latestBooks: results
                }
            );
        });
    }
};

module.exports = bookController;