const User = require("../Models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newProfile = async (req, res) =>{
    try {
        const existingUser = await User.findOne({email: req.body.email})
        if (existingUser) {
            res.status(409).json("A user with this email already exists!")
            return
        }
    const {name, email, password, role, address, phone} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        name, email, password: hashedPassword, role, address, phone
    })
    await newUser.save();
    res.status(201).json({message: `Hello, ${name} you are registered as a ${role}!`})
} catch (err) {
    res.status(500).json({message: err.message})
}
}

const login = async (req, res)=>{
    try {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: "Email and password are required"})
    }
    const existingUser = await User.findOne({email})
    if (!existingUser) {
        return res.status(400).json({message: "Wrong email or password"})
    }
    const passwordMatches = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatches) {
        return res.status(400).json({message: "Wrong email or password"})
    }
    
const token = jwt.sign({id: existingUser._id, email: existingUser.email, role: existingUser.role}, process.env.JWT_SECRET, {expiresIn: 60*60});
    res.status(200).json({message: "Login successful!", token})
} catch (err) {
    res.status(500).json({message: "Something went wrong!", err})
}
}

const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({success: false, message: "User not found"});
        }

        const {name, email, phone, address, password} = req.body;
        if (name) user.name = name;
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (address) user.address = address;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();
        res.status(200).json({success: true, message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {newProfile, login, updateProfile};