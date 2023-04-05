const express = require("express")
const router = express.Router()
const {authAdmin} = require("../config/auth")

// Controller
const admin = require("../controllers/adminController")


router.post("/auth/login", admin.login)

router.get("/category", authAdmin, admin.allCategory)


module.exports = router;