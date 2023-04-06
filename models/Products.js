const mongoose = require("mongoose")
const Schema = mongoose.Schema


const Product = new Schema({
   name:{
    type: String,
    required: true
   }, 
   qty:{
    type: Number,
    required: true
   },
   category:{
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true
   },
   price: {
    type: Number,
    required: true
   }

})


mongoose.model("products", Product)