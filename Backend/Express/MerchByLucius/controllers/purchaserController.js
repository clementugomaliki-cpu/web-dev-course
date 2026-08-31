const Purchaser = require("../models/purchasers");
const {sendVerificationEmail} = require("./purchaserMail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const purchaserSignup = async (req, res) => {
        const {name, email, password} = req.body;
const hashedPassword = await bcrypt.hash(password, 10)
const existingUser = await Purchaser.findOne({email});
if (existingUser) {
    if (existingUser.isVerified) {
        return res.status(400).json({message: "A user with this email already exists."})
    }
    existingUser.name = name;
    existingUser.password = hashedPassword;
    await existingUser.save();

    try {
        await sendVerificationEmail(email);
    } catch (emailError) {
        console.log("Email failed to send:", emailError);
    }

    return res.status(201).json({message: "Enter the verification code sent to your email to complete your account registration."})
}

const newUser = new Purchaser({ name, email, password: hashedPassword });
await newUser.save();
try {
    await sendVerificationEmail(email);
} catch (emailError) {
    console.log("Email failed to send, but account was created:", emailError);
}
res.status(201).json({message: "Enter the verification code sent to your email to complete your account registration."})
}

async function verifyEmail (req, res) {
    try {
    const {email, otp} = req.body;
    const registeredPurchaser = await Purchaser.findOne({email});
    if (!registeredPurchaser) {
        return res.status(400).json({message: "No account found with this email."})
    }
    if (otp !== registeredPurchaser.otp) {
        return res.status(400).json({message: "The code you entered is incorrect. Please try again."});
    }
    if (registeredPurchaser.otpExpiry < Date.now()) {
        return res.status(403).json ({message: "This verification code is no longer valid."});
    }
    registeredPurchaser.isVerified = true;
    registeredPurchaser.otp = undefined;
    registeredPurchaser.otpExpiry = undefined;
    await registeredPurchaser.save();
    res.status(200).json({message: "Congratulations, your account has been created!"});
} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong while verifying your email. Try again."})
}
}

async function purchaserLogin (req, res) {
    try {
        const {email, password} = req.body;
        const registeredPurchaser = await Purchaser.findOne({email});
        if (!registeredPurchaser) {
            return res.status(400).json({message: "Wrong email or password"})
        }
        const passwordsMatch = await bcrypt.compare(password, registeredPurchaser.password);
        if (!passwordsMatch) {
            return res.status(400).json({message: "Wrong email or password"})
        };
        if (!registeredPurchaser.isVerified) {
            return res.status(403).json({message: "You need to verify your email before you can sign in."})
        }

        const userToken = await jwt.sign({id: registeredPurchaser._id, email: registeredPurchaser.email}, process.env.JWT_SECRET, {expiresIn: 60*60*2} );
        res.status(200).json({message: "Log in successful", userToken})

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Failed to sign in. Check your details and try again."})
    }
}

module.exports = {purchaserSignup, verifyEmail, purchaserLogin}