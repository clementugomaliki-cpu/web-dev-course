const jwt = require("jsonwebtoken");
const User = require("../Models/users");
require("dotenv").config();

const auth = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();

    } catch (err) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = auth;