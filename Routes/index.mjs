import express from "express"
import DocketController from "../Controller/DocketController.mjs"

const router = express.Router()

router.get("/csv-to-json", DocketController.csvToJson)
router.post("/save-docket", DocketController.saveDocket)
router.get("/dockets", DocketController.getDockets)

export default router