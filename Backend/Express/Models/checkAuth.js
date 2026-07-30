const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) =>{
    const secret = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(req.headers.authorization, secret);
    req.userData = decodedToken;
    next();
}