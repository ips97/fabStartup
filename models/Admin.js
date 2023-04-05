const mongoose = require("mongoose")
const Schema = mongoose.Schema


const Admin = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    }
})


mongoose.model("users", Admin)