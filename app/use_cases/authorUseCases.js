const authorRepository = require("../infrastructure/repositories/authorRepository");
const { validateAuthor } = require("../infrastructure/validators/authorValidator");
class AuthorUseCases {
    static async getAllAuthors() {
        return await authorRepository.getAll();
    }
    static async createAuthor(author) {
        validateAuthor(author);
        return await authorRepository.create(author);
    }
}
module.exports = AuthorUseCases;