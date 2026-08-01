const Creator = require("../models/creators");
const {sendVerificationEmail} = require("./creatormail");
const bcrypt = require("bcrypt");


async function createUser(req, res) {
    try {
        const {name, email, password} = req.body;
const hashedPassword = await bcrypt.hash(password, 10)
const existingUser = await Creator.findOne({email});
if (existingUser) {
   return res.status(400).json({message: "A user with this email already exists."})
}
const newUser = new Creator({
    name, email, password: hashedPassword
})
await newUser.save();
await sendVerificationEmail(email);
res.status(201).json({message: "Enter the verification code sent to your email to complete your account creation."})
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong while creating your account. Try again."})
    }

}

async function verifyEmail (req, res) {
    try {
    const {email, otp} = req.body;
    const registeredCreator = await Creator.findOne({email});
    if (!registeredCreator) {
        return res.status(400).json({message: "No account found with this email."})
    }
    if (otp !== registeredCreator.otp) {
        return res.status(400).json({message: "OTP mismatch. Enter the latest verification code sent to your email."});
    }
    if (registeredCreator.otpExpiry < Date.now()) {
        return res.status(400).json ({message: "This verification code is no longer valid."});
    }
    registeredCreator.isVerified = true;
    registeredCreator.otp = undefined;
    registeredCreator.otpExpiry = undefined;
    await registeredCreator.save();
    res.status(200).json({message: "Congratulations, your account has been created!"});
} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong while verifying your email. Try again."})
}
}

module.exports = {createUser, verifyEmail}