const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

const myStoredProducts = [];

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connection to db successful"))
    .catch((err) => console.log(err))
    
app.get("/", (req, res) => {
    res.send("This is the home page.")
});
    app.post("/products/", (req, res) => {
       const {id, title, price, description, category, image} = req.body;
       const newProduct = {id: myStoredProducts.length + 1, title, price, description, category, image}
       const addProduct = myStoredProducts.push(newProduct);
       res.status(201).json({message: `${newProduct.title} added successfully`});
       console.log(myStoredProducts);
    
    });
     
app.listen(port, () =>{ 
    console.log(`Server running on port ${port}`)
})