import express from "express";

import { createPassword, getPasswords, getPasswordById, updatePassword, deletePassword } from "../controller/password.controller.js";

const router = express.Router();

router.get("/", getPasswords);

router.post("/", createPassword);

router.delete("/:id", deletePassword);

router.patch("/:id", updatePassword);

export default router;
