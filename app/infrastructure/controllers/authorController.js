const AuthorUseCases = require("../../use_cases/authorUseCases");
const authorAdapter = require("../adapters/authorAdapter");
module.exports = {
    getAuthors: async (req, res) => {
        const authors = await AuthorUseCases.getAllAuthors();
        res.json(authors.map(authorAdapter.toDTO));
    },
    createAuthor: async (req, res) => {
        try {
            const newAuthor = await AuthorUseCases.createAuthor(authorAdapter.fromDTO(req.body));
            res.status(201).json(authorAdapter.toDTO(newAuthor));
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
