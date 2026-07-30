const express = require("express");
const router = express.Router();
const { productsList } = require("../constants");
const ProductModel = require("../models/productModel");
const authMiddleware = require("../middlewares/check-auth");
const { addtocart, getSingleItem } = require("../controller/productController");

router.get("/", async (req, res) => {
  console.log("Point 1");

  const products = await ProductModel.find();
  res.status(200).send(products);
});

router.post("/addtocart", authMiddleware, addtocart);

router.get("/:id", getSingleItem);

router.post("/add", async (req, res) => {
  try {
    const product = new ProductModel({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
    });

    await product.save();

    res.json({
      message: `${product.title} has been added successfully`,
      data: product,
    });
    // mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", (req, res) => {
  const newlist = productsList.filter(
    (item) => item.id !== Number(req.params.id),
  );

  res.status(200).json(newlist);
});

module.exports = router;