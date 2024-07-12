const express = require("express");
const router = express.Router();
const ValidToken = require("../Middleware/Auth");

const { RegisterUser, LoginUser, GetBooks, GetBook } = require("../Controllers/StudentController");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/books", ValidToken, GetBooks);
router.get("/books/search", ValidToken, GetBook);

module.exports = router;
