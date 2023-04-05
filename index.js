const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const admin = require("./routes/admin")
const cors = require("cors")
require("dotenv").config()



    // CORS
    app.use(cors())

    // Body Parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));

    // Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/fabStartup").then(() =>{
        console.log("MongoDB Connected");
    }).catch((err) =>{
        console.log("Erro connecting: " + err);
    });

    app.use("/admin", admin)





app.listen(8080, ()=> {

    console.log("Server On")

})