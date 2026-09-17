const Product = require("../models/products");

const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock} = req.body;
        if (!req.file) {
            return res.status(400).json({message: "Product image is required"});
        }

        const image = req.file.path;
        const newProduct = new Product({
           creator: req.user._id, name, description, price, image, stock, status: "pending"
        });
        await newProduct.save();
        res.status(201).json({message: `Your product ${name} was submitted for review`, productId: newProduct._id})
    } catch (error) {
        res.status(500).json({message: "Failed to add product"})
    }
}

const listApprovedProducts = async (req, res) => {
    try {
        const products = await Product.find({status: "approved"}).populate("creator", "name");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: "Failed to load products"});
    }
};

const listPendingProducts = async (req, res) => {
    try {
        const products = await Product.find({status: "pending"}).populate("creator", "name email");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: "Failed to load pending products"});
    }
};

const approveProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            {_id: req.params.id, status: "pending"},
            {status: "approved", reviewedAt: new Date(), reviewedBy: req.user._id, rejectionReason: undefined},
            {new: true, runValidators: true}
        );
        if (!product) {
            return res.status(404).json({message: "Pending product not found"});
        }
        res.status(200).json({message: "Product approved", product});
    } catch (error) {
        res.status(500).json({message: "Failed to approve product"});
    }
};

const rejectProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            {_id: req.params.id, status: "pending"},
            {status: "rejected", reviewedAt: new Date(), reviewedBy: req.user._id, rejectionReason: req.body.reason || "Product did not meet review requirements"},
            {new: true, runValidators: true}
        );
        if (!product) {
            return res.status(404).json({message: "Pending product not found"});
        }
        res.status(200).json({message: "Product rejected", product});
    } catch (error) {
        res.status(500).json({message: "Failed to reject product"});
    }
};

module.exports = {createProduct, listApprovedProducts, listPendingProducts, approveProduct, rejectProduct};