const router = require("express").Router();
const auth = require("../middleware/auth");
//const authorize = require("../middleware/authorize");
const {addToCart, getCart, updateCartItem, removeCartItem} = require("../controllers/cart");

router.get("/", auth, getCart);

router.post("/", (req, res)=>{console.log(req.body)}, auth, addToCart);

router.put("/:productId", auth, updateCartItem);

router.delete("/:productId", auth,  removeCartItem);

module.exports = router;