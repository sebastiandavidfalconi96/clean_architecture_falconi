module.exports = {
    validateBook: (book) => {
        if (!book.title || book.title.length < 3) throw new Error("Title must be at least 3 characters long.");
        if (!book.genre) throw new Error("Genre is required.");
        if (!book.publishedYear || book.publishedYear < 1000) throw new Error("Invalid published year.");
        if (!book.pages || book.pages <= 0) throw new Error("Pages must be greater than zero.");
    }
};
