const express = require("express");
const { AddBook, DelBook } = require("../Controllers/BookController");
const router = express.Router();

//router.use(ValidToken);
router.post("/add", AddBook);
router.delete("/remove/:id", DelBook);

module.exports = router;
