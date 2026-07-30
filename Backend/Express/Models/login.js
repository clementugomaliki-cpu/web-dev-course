const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose")
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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

// app.post("/signin", async (req, res) => {
//     const alreadyRegistered = await UserModel.find({email: req.body.email});
//     if (alreadyRegistered.length >=1) {
//         try {
//         const comparePasswords = await bcrypt.compare(req.body.password, alreadyRegistered[0].password)
//       const token =  await jwt.sign({email: alreadyRegistered[0].email}, "auniquecodeyoucanusehere", {expiresIn: 60 * 60})
//         await res.status(200).json({message: "user logged in successfully", token: token})
//     } catch (e) {
//         console.log(e);
//         return res.status(404).json({message: "wrong email or password"})
//     }
// } else {
//     res.status(400).json({message: "wrong email or password"})
// }
    
// });

// app.listen(port, ()=>{
//     console.log(`The server is running on port ${port}`)
// })


app.post("/signin", async (req, res) => {
    try {
        const alreadyRegistered = await UserModel.findOne({ email: req.body.email });
        
        if (!alreadyRegistered) {
            return res.status(400).json({ message: "wrong email or password" });
        }

        const passwordMatches = await bcrypt.compare(req.body.password, alreadyRegistered.password);

        if (!passwordMatches) {
            return res.status(400).json({ message: "wrong email or password" });
        }

        const token = jwt.sign(
            { email: alreadyRegistered.email },
            process.env.JWT_SECRET,
            { expiresIn: 60 * 60 }
        );

        res.status(200).json({ message: "user logged in successfully", token });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "something went wrong" });
    }
});

app.listen(port, ()=>{
console.log(`The server is running on port ${port}`)
})