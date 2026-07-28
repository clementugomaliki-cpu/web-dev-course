const Message = require("../Models/chat");
const Product = require("../Models/products");
const User = require("../Models/users");

const sendMessage = async (req, res) => {
    try {
        const { receiver, product, message } = req.body;
        const receiverExists = await User.findById(receiver);
        if (!receiverExists) {
            return res.status(404).json({success: false, message: "Receiver not found."});
        }

        if (product) {
            const productExists = await Product.findById(product);
            if (!productExists) {
                return res.status(404).json({success: false, message: "Product not found."});
            }
        }
        const newMessage = await Message.create({sender: req.user._id, receiver, 
            product, message});
        res.status(201).json({
            success: true, message: "Message sent successfully.", data: newMessage});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getConversation = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                {
                    sender: req.user._id,
                    receiver: req.params.userId
                },
                {
                    sender: req.params.userId,
                    receiver: req.user._id
                }
            ]
        })
        .populate("sender", "name")
        .populate("receiver", "name")
        .populate("product", "name image")
        .sort({ createdAt: 1 });

        res.status(200).json({success: true, count: messages.length, messages});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getMyChats = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                {
                    sender: req.user._id
                },
                {
                    receiver: req.user._id
                }
            ]
        })
        .populate("sender", "name")
        .populate("receiver", "name")
        .sort({ createdAt: -1 });

        res.status(200).json({success: true, count: messages.length, messages});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {sendMessage, getConversation, getMyChats};