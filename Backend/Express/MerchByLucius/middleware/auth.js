const Creator = require("../models/creators");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({message: "Unauthorized access"});
        }
        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await Creator.findById(decoded.id);
        if (!req.user) {
            return res.status(401).json({message: "User account not found"});
        }
        req.userRole = req.user.role || decoded.role;

        next();
    } catch (error) {
        res.status(401).json({message: "Invalid token"});
    }
};

const requireRole = (...roles) => (req, res, next) => {
    if (!roles.includes(req.userRole)) {
        return res.status(403).json({message: "You do not have permission to access this resource"});
    }
    next();
};

module.exports = auth;
module.exports.requireRole = requireRole;