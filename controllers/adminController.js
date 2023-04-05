const mongoose = require("mongoose");
require("../models/Admin")
const Admin = mongoose.model("users")
require("../models/Products")
const Product = mongoose.model("products")
require("../models/Category")
const Category = mongoose.model("categories")
const jwt = require("jsonwebtoken")


const login = (req, res) =>{

    const {email, password} = req.body.user

    Admin.findOne({email: email}).then((user)=>{
        
        if(!user){
            return res.status(400).send({message: "Non-existent User!"})
        }

        if(user.password == password){
            const token =  jwt.sign({id: user._id, nome: user.name, admin: true}, process.env.TOKEN_SECRET, {expiresIn: 6000})

            res.status(200).send({message:"Logged in User!", token: token})
        }else{
            return res.status(400).send({message: "Incorrect password, check and try again!"})
        }
    }).catch((err)=>{
        return res.status(400).send({message: "There was an error looking for user in the database!"})
    })

}

const allCategory = (req, res) =>{

    Category.find().then((categories)=>{

        if(categories.length === 0){
            res.status(400).send({message: "No category found!"})    
        }
        
        res.status(200).send({
            message: "Categories found",
            data: categories
        })
    }).catch((err)=>{
        return res.status(400).send({message: "There was an error looking for user in the database!"})
    })

}






module.exports = { login, allCategory }
