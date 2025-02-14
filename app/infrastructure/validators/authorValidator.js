module.exports = {
    validateAuthor: (author) => {
        if (!author.name || author.name.length < 3) throw new Error("Name must be at least 3 characters long.");
        if (!author.birthdate) throw new Error("Birthdate is required.");
        if (!author.nationality) throw new Error("Nationality is required.");
    }
};