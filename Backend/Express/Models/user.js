const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose")
require("dotenv").config();
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Server is connected to your database"))
.catch((errorMessage)=> console.log(errorMessage))

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true}
})

const UserModel = mongoose.model("User", Schema);
app.post("/register", async(req, res) => {
    const alreadyRegistered = await UserModel.find({email: req.body.email});
    if (alreadyRegistered.length >=1) {
        return res.status(400).json({message: "this email is already in use"})
    }
    try {
        const newUser = new UserModel({
            name: req.body.name,
            email: req.body.email
        })
        
    } catch {}
    
})

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`)
})