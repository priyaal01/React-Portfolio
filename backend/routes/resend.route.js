import express from "express"
import { getEmail } from "../controller/resend.controller.js";

const router = express.Router();

router.route("/contact").post(getEmail)


export default router;

