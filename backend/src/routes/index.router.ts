import { Router } from "express";
import usersRouter from "./users.route";
import booksRouter from "./books.router";
import borrowingsRouter from "./borrowings.router";
import historiesRouter from "./histories.router";
import librariesRouter from "./libraries.router";
import loginRouter from "./login.router";

const router = Router();

router.use("/books", booksRouter);
router.use("/borrowing", borrowingsRouter);
router.use("/external", loginRouter);
router.use("/history", historiesRouter);
router.use("/libraries", librariesRouter);
router.use("/users", usersRouter);

export default router;
