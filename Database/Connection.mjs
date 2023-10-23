import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

export const connect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("Database connected")
    }).catch(err => {
        console.log(err)
    })
}