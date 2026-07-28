const Product = require("../Models/products");

const createProduct = async (req, res) => {
    try {
        const {name, description, category, image, price, stock} = req.body;
        const product = await Product.create({seller: req.user._id, name, description,
            category, image, price, stock});
        res.status(201).json({success: true, message: "Product created successfully", product});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("seller", "name email");
        res.status(200).json({success: true, count: products.length, products});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate("seller", "name email phone");
        if (!product) {
            return res.status(404).json({success: false, message: "Product not found"});
        }
        res.status(200).json({success: true, product});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({success: false, message: "Product not found"});
        }
        if (product.seller.toString() !== req.user._id.toString()) {
            return res.status(403).json({success: false, message: "You can only update your own products."});
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{
            new: true, runValidators: true
        });
        res.status(200).json({success: true, message: "Product updated successfully", updatedProduct});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({success: false, message: "Product not found"});
        }
        if (product.seller.toString() !== req.user._id.toString()) {
            return res.status(403).json({success: false, message: "You can only delete your own products."});
        }
        await product.deleteOne();
        res.status(200).json({success: true, message: "Product deleted successfully"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {createProduct, getProducts, getProductById, updateProduct, deleteProduct};