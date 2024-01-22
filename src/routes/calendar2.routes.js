import {Router} from "express"
import {calendar2Entry} from "../controllers/calendar2.controller.js";

const router = Router()

router.route("/cal2Entry").post(calendar2Entry)


export default router