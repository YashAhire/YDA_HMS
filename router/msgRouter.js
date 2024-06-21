import express from "express";
import { getAllMessages, sendMessage } from "../conotroller/msgController.js";
import { isAdminAuthenticated } from "../middlewere/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAllMessage", isAdminAuthenticated, getAllMessages);

export default router;