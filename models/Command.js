const mongoose = require("mongoose")
const Schema = mongoose.Schema


const Command = new Schema({
    table:{
        type: Number,
        required: true
    },
    items:{
        type: Array
    },
    amount:{
        type: Number,
        required: true
    }
})


mongoose.model("commands", Command)