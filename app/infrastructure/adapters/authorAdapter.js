const Author = require("../../domain/author");
module.exports = {
    toDTO: (author) => ({
        id: author.id,
        name: author.name,
        birthdate: author.birthdate,
        nationality: author.nationality
    }),
    fromDTO: (dto) => new Author(dto.id, dto.name, dto.birthdate, dto.nationality)
};