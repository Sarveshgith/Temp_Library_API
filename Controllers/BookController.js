const AsyncHandler = require("express-async-handler");

const Book = require("../Models/BookModel");
const { errHandle } = require("../Middleware/errHandle");
const DefinedError = require("../Middleware/DefinedError");

const AddBook = async (req, res) => {
  try {
    console.log("Created Book: ", req.body);
    const { title, author } = req.body;

    if ([title, author].some((field) => !field)) {
      throw new DefinedError(
        400,
        "error",
        "Book Not Added",
        "Book Not Shelved"
      );
    }

    const book = await Book.create(req.body);
    return res.status(200).json(book);
  } catch (err) {
    errHandle(err, err instanceof DefinedError, "Book Not Shelved", res);
  }
};

const DelBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      throw new DefinedError(
        404,
        "error",
        "Book Not Found",
        "Book Not Deleted"
      );
    }
    await Book.deleteOne({ _id: req.params.id });
    return res.status(200).json(book);
  } catch (error) {
    errHandle(error, error instanceof DefinedError, "Book Not Deleted", res);
  }
};

module.exports = {
  AddBook,
  DelBook,
};
