const bookRepository = require("../infrastructure/repositories/bookRepository");
const { validateBook } = require("../infrastructure/validators/bookValidator");
class BookUseCases {
    static async getAllBooks() {
        return await bookRepository.getAll();
    }
    static async createBook(book) {
        validateBook(book);
        return await bookRepository.create(book);
    }
}
module.exports = BookUseCases;