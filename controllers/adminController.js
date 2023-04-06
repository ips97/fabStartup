const mongoose = require("mongoose");
require("../models/Admin")
const Admin = mongoose.model("users")
require("../models/Products")
const Product = mongoose.model("products")
require("../models/Category")
const Category = mongoose.model("categories")
require("../models/Command")
const Command = mongoose.model("commands")
const jwt = require("jsonwebtoken")


const login = (req, res) =>{

    const {email, password} = req.body.user

    Admin.findOne({email: email}).then((user)=>{
        
        if(user.password == password){
            const token =  jwt.sign({id: user._id, nome: user.name, admin: true}, process.env.TOKEN_SECRET, {expiresIn: 600})

            res.status(200).send({message:"Logged in User!", token: token})
        }else{
            return res.status(400).send({message: "Incorrect password, check and try again!"})
        }
    }).catch((err)=>{
        return res.status(400).send({
            message: "Non-existent User!",
            error: err
        })
    })

}

const allCategories = (req, res) =>{

    Category.find().then((categories)=>{

        if(categories.length === 0){
            res.status(400).send({message: "No category found!"})    
        }
        
        res.status(200).send({
            message: "Categories found",
            data: categories
        })
    }).catch((err)=>{
        return res.status(400).send({
            message: "There was an error looking for categories in the database!",
            error: err
        })
    })

}

const newProduct = (req, res)=>{

    const {category, name, qty, price} = req.body.product

    const newProduct = new Product({
        name: name, 
        category: category, 
        qty: qty, 
        price: price
    })

    newProduct.save().then((product)=>{
        return  res.status(200).send({message:"Product saved successfully!"})
    }).catch((err)=>{
        return res.status(400).send({
            message: "There was an error saving product data!",
            error: err
        })
    })
}

const allProducts = (req, res)=>{
    
    Product.find().populate("category").then((products)=>{

        if(products.length === 0){
            res.status(400).send({message: "No Product found!"})    
        }
        
        res.status(200).send({
            message: "Products found!",
            data: products
        })
    }).catch((err)=>{
        return res.status(400).send({
            message: "There was an error looking for product in the database!",
            error: err
        })
    })
}

const searchProduct = (req, res)=>{
    
    const {id} = req.params
    
    Product.findOne({_id: id}).then((product) =>{
       
        return res.status(200).send({
            message: "Product found!",
            data: product
        })
            
    }).catch((err) =>{
        return res.status(400).send({
            message: "No Product found!",
            error: err
        })
    })
}

const updateProduct = (req, res)=>{

    const {id} = req.params
    const {category, name, qty, price } = req.body.product

    Product.findOne({_id: id}).then((product)=>{

        if(name != product.name){
            product.name = name
        }
        if(category != product.category){
            product.category = category
        }
        if(qty != product.qty){
            product.qty = qty
        }
        if(price != product.price){
            product.price = price
        }

 
        product.save().then((product)=>{
            return  res.status(200).send({message:"Product saved successfully!"})
        }).catch((err)=>{
            return res.status(400).send({
                message:"There was an error saving product data!",
                error: err
            })
        })

    }).catch((err) =>{
        return res.status(400).send({
            message: "No Product found!",
            error: err
        })
    })


}

const deleteProduct = (req, res)=>{

    const {id} = req.params
    
    Product.deleteOne({_id: id}).then((product)=>{
        res.status(200).send({message: "Product deleted successfully!"});
    }).catch((err)=>{
        res.status(500).send({
            message: "There was an error deleting product in the Database!",
            error: err
        })
    })
}

const allCommand = (req, res)=>{
    
    Command.find().populate("category").then((commands)=>{

        if(commands.length === 0){
            res.status(400).send({message: "No Command found!"})    
        }
        
        res.status(200).send({
            message: "Commands found!",
            data: commands
        })
    }).catch((err)=>{
        return res.status(400).send({
            message: "There was an error looking for command in the database!",
            error: err
        })
    })
}

module.exports = { login, allCategories, newProduct, allProducts, searchProduct, updateProduct, deleteProduct, allCommand }
