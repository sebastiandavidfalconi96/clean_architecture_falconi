const { books } = require("../database/db");
module.exports = {
    getAll: async () => books,
    create: async (book) => {
        books.push(book);
        return book;
    }
};