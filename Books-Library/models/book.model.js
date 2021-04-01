const mysqlConnection = require('../config/database');

const book = {
    executeQuery(query, callback) {
        mysqlConnection.query(query, (err, res) => callback(err, res));
    },

    create(params, callback) {
        const {
            title,
            description,
            image
        } = params;
        const query = `INSERT INTO Book (title, description, image) 
            VALUES ("${title}", "${description}", "${image}");`;
        return this.executeQuery(query, callback);
    },

    getAll(callback) {
        const query = 'SELECT * FROM Book;';
        return this.executeQuery(query, callback);
    }
};

module.exports = book;