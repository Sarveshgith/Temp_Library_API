const express = require("express");
const router = express.Router();
const ValidToken = require("../Middleware/Auth");

const { RegisterUser, LoginUser, GetBook } = require("../Controllers/StudentController");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/books", ValidToken, GetBook);

module.exports = router;
