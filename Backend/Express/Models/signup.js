const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose")
require("dotenv").config();
const bcrypt = require("bcrypt");

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Server is connected to your database"))
.catch((errorMessage)=> console.log(errorMessage))

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const UserModel = mongoose.model("User", Schema);

app.post("/signup", async (req, res) => {
    const alreadyRegistered = await UserModel.find({email: req.body.email});
    if (alreadyRegistered.length >=1) {
        return res.status(400).json({message: "this email is already in use"})
    }
    const hashedPassword = await bcrypt.hash(
        req.body.password,
        10
    );
    try {
        const newUser = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({message: "You successfully registered. Thank you!"})
    } catch (e) {
        console.log("failed to create user");
        res.status(406).json({message: "failed to register user"})
    } 
});

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`)
})