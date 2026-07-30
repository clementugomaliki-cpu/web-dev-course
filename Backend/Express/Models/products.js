const express = require("express");
const app = express();
const router = express.Router();
const products = require("../Products_Practice/products");
const ProductModel = require("./productModel");
const port = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(router);
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("server running on db"))
.catch((err) => console.log("DB connection error:", err));
router.post("/add", async(req, res) => {
    try {
        const product = new ProductModel({
            title: req.body.title,
            price: Number(req.body.price),
            description: req.body.description,
            category: req.body.category
        });
        await product.save();
        res.json({
            message: `${product.title} has been added successfully`,
            data: product
        });
    } catch(err) {
        console.log(err);
    }
})
app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})
