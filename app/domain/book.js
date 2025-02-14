class Book {
    constructor(id, title, authorId, genre, publishedYear, pages) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.genre = genre;
        this.publishedYear = publishedYear;
        this.pages = pages;
    }
}
module.exports = Book;