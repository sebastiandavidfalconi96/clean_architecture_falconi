const { authors } = require("../database/db");
module.exports = {
    getAll: async () => authors,
    create: async (author) => {
        authors.push(author);
        return author;
    }
};
