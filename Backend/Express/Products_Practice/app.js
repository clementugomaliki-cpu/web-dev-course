const express = require("express");
const app = express();
const port = 4000;
const productsList = require("./products");

app.use(express.json());
app.get("/", (req, res)=>{
    res.send("This is the products home page");
})
app.get("/products", (req, res)=>{
    res.json(productsList);
});
app.get("/products/:id", (req, res) => {
  const product =  productsList.find((prod) => prod.id === Number(req.params.id));
    res.json(product)
});
app.delete("/products/:id", (req, res) => {
   const updated = productsList.filter((prod) => prod.id !== Number(req.params.id))
    res.json(updated);
})

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})