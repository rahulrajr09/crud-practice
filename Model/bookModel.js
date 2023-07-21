import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : String,
    description : String,
    cost : Number
})

const model = mongoose.model('books',schema);

export default model;