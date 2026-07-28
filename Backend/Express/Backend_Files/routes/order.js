const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const authorize = require("../Middleware/authorize");

const {
    checkout,
    getOrders,
    getSingleOrder,
    cancelOrder
} = require("../controllers/orders");

router.post("/", auth, authorize("buyer"), checkout);

router.get("/", auth, authorize("buyer"), getOrders);

router.get("/:id", auth, authorize("buyer"), getSingleOrder);

router.patch("/:id/cancel", auth, authorize("buyer"), cancelOrder);

module.exports = router;