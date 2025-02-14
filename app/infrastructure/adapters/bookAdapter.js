const Book = require("../../domain/book");
module.exports = {
    toDTO: (book) => ({
        id: book.id,
        title: book.title,
        authorId: book.authorId,
        genre: book.genre,
        publishedYear: book.publishedYear,
        pages: book.pages
    }),
    fromDTO: (dto) => new Book(dto.id, dto.title, dto.authorId, dto.genre, dto.publishedYear, dto.pages)
};