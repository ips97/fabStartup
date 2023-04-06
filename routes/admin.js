const express = require("express")
const router = express.Router()
const {authAdmin} = require("../config/auth")

// Controller
const admin = require("../controllers/adminController")


router.post("/auth/login", admin.login)

router.get("/category", authAdmin, admin.allCategories)

router.get("/product", authAdmin, admin.allProducts)
router.get("/product/:id", authAdmin, admin.searchProduct)
router.post("/product", authAdmin, admin.newProduct)
router.patch("/product/:id", authAdmin, admin.updateProduct)
router.delete("/product/:id", authAdmin, admin.deleteProduct)

router.get("/command", authAdmin, admin.allCommand)

module.exports = router;