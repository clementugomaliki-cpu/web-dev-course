const express = require("express");
const router = express.Router();
const {createProduct, listApprovedProducts, listPendingProducts, approveProduct, rejectProduct} = require("../controllers/productController");
const auth = require("../middleware/auth");
const {requireRole} = require("../middleware/auth");
const uploadImage = require("../middleware/upload");

router.get("/", listApprovedProducts);
router.post("/add-product", auth, requireRole("creator"), uploadImage.single("image"), createProduct);
router.get("/pending", auth, requireRole("moderator"), listPendingProducts);
router.patch("/:id/approve", auth, requireRole("moderator"), approveProduct);
router.patch("/:id/reject", auth, requireRole("moderator"), rejectProduct);

module.exports = router;
