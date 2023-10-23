import express from "express"
import cors from "cors"
import morgan from "morgan"
import userRouter from "./Routes/index.mjs"
import * as db from "./Database/Connection.mjs"

db.connect()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.listen(8080, () => {
    console.log("Server Connected!");
})

app.use("/", userRouter)