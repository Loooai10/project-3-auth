const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next)=> { // next means what you want do next
    // const token = req.header("x-auth-token");
    // console.log(token);
let token = ""
let authorizationToken = req.header("Autherization");
console.log(authorizationToken);

    if (!authorizationToken){
        return res.status(401).json({message: "Ahaaaan!! You are not allowed to view this as this is a protected route."})
    }
    if(authorizationToken){
        authorizationToken = authorizationToken.replace('Bearer', '')
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded.user;
        next()
    } catch(err){
        return res.status(401).json({message:"Ypur token is invalid"})
    }
}