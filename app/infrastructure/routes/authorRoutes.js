const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
router.get("/authors", authorController.getAuthors);
router.post("/authors", authorController.createAuthor);
module.exports = router;