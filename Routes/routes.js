import express from 'express';
import {getBooksRoute, getBookByNameRoute} from '../Controller/getBooks.js';
import addBookRoute from '../Controller/addBook.js';
import updateNameRoute from '../Controller/updateName.js';
import deleteBookRoute from '../Controller/deleteBook.js';

const router = express.Router();


router.get("/get-books",getBooksRoute);
router.post("/add-book",addBookRoute);
router.get("/get-book-by-name/:name",getBookByNameRoute)
router.patch("/update-name",updateNameRoute);
router.delete("/delete-book",deleteBookRoute);



export default router;