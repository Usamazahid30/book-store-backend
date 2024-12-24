const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

//Post book
router.post("/create-book", verifyAdminToken, postABook);

//get all books
router.get("/", getAllBooks);

//get single book
router.get("/:id", getSingleBook);

//update a book endpoint
router.put("/edit/:id", verifyAdminToken, updateBook);

router.delete("/:id", verifyAdminToken, deleteABook);

module.exports = router;
