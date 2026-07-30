const express = require("express");
const products = require("../Products_Practice/products");
const productList = require("../Products_Practice/products");
//const cors = require("cors");
const app = express();
const port = 3000;

const newProduct = [
    {"id": 21, "title": "Moniepoint POS Terminal", "price": 120.10,
    "description": "Your perfect POS terminal for everyday transactions",
    "category": "Electronics"
    }]

app.use(express.json());
app.get("/products",(req,res)=>{
    console.log(productList);
})

app.post("/products", (req, res) => {

})

app.listen(3000, () => {
    console.log(`Server running on port ${port}`)
})
