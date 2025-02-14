const BookUseCases = require("../../use_cases/bookUseCases");
const bookAdapter = require("../adapters/bookAdapter");
module.exports = {
    getBooks: async (req, res) => {
        const books = await BookUseCases.getAllBooks();
        res.json(books.map(bookAdapter.toDTO));
    },
    createBook: async (req, res) => {
        try {
            const newBook = await BookUseCases.createBook(bookAdapter.fromDTO(req.body));
            res.status(201).json(bookAdapter.toDTO(newBook));
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
