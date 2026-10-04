import {Schema, model} from "mongoose";

const urlSchema = new Schema({
    original: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    short: {
        type: String,
        required: true,
        unique: true,
        required: true,
        index: true
    }
});
export const URLSchema = model("URLSchema", urlSchema);