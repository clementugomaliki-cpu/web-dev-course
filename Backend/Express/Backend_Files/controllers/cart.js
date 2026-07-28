const Cart = require("../Models/cart");
const Product = require("../Models/products");

const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const qty = quantity && quantity > 0 ? quantity : 1;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({success: false, message: "Product not found"});
        }
        if (product.stock < qty) {
            return res.status(400).json({success: false, message: "Insufficient stock"});
        }

        let cart = await Cart.findOne({ Seller: req.user._id });
        if (!cart) {
            cart = new Cart({ Seller: req.user._id, items: [] });
        }

        const existingItem = cart.items.find(item => item.product.toString() === productId);

        if (existingItem) {
            existingItem.quantity += qty;
        } else {
            cart.items.push({ product: productId, quantity: qty });
        }

        await cart.save();
        res.status(200).json({success: true, message: "Product added to cart", cart});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ Seller: req.user._id })
            .populate("items.product", "name price image stock");

        if (!cart) {
            return res.status(200).json({success: true, cart: { Seller: req.user._id, items: [] }});
        }
        res.status(200).json({success: true, cart});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cart = await Cart.findOne({ Seller: req.user._id });
        if (!cart) {
            return res.status(404).json({success: false, message: "Cart not found"});
        }
        const item = cart.items.find(item => item.product.toString() === req.params.productId);
        if (!item) {
            return res.status(404).json({success: false, message: "Product not in cart"});
        }
        item.quantity = quantity;
        await cart.save();
        res.status(200).json({success: true, message: "Cart updated", cart});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const removeCartItem = async (req, res) => {
    try {
        const cart = await Cart.findOne({ Seller: req.user._id });
        if (!cart) {
            return res.status(404).json({success: false, message: "Cart not found"});
        }
        cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);
        await cart.save();
        res.status(200).json({success: true, message: "Item removed from cart", cart});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = { addToCart, getCart, updateCartItem, removeCartItem };