import mongoose from "mongoose"

const docketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    start_time: {
        type: Number,
        required: true
    },
    end_time: {
        type: Number,
        required: true
    },
    no_of_hour_worked: {
        type: Number,
        required: true
    },
    rate_per_hour: {
        type: Number,
        required: true
    },
    supplier_name: {
        type: String,
        required: true
    },
    po_number: {
        type: String,
        required: true
    }
})

export const docket = mongoose.model("dockets", docketSchema)