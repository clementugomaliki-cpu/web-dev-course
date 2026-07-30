const router = require("express").Router();
const auth = require("../Middleware/auth");
const authorize = require("../Middleware/authorize");
const {createProduct, getProducts, getProductById, updateProduct, deleteProduct} 
    = require("../controllers/products");

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", auth, authorize("Seller"), createProduct);

router.put("/:id", auth, authorize("Seller"), updateProduct);

router.delete("/:id", auth, authorize("Seller"), deleteProduct);

module.exports = router;