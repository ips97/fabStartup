const jwt = require("jsonwebtoken")

const authAdmin = (req, res, next)=>{

    const token = req.header("token");

    if(!token) return res.status(401).send({message:"Access denied, login required!"})

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = userVerified
        
        if(req.user.admin){
            next()
        }else{
            return res.status(402).send({message: "User is not Admin!"})
        }
        
    } catch (error) {
        if(error.message === "jwt expired"){
            return res.status(402).send({message: "Access Expired, please login again!"})
        }
        return res.status(401).send({
            message:"Acess denied",
            error: error
        })
    }
}

module.exports = {authAdmin}