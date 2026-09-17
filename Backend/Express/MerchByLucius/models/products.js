const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    image: {type: String, required: true},
    stock: {type: Number, required: true, default: 0},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: "Creator", required: true},
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    reviewedAt: Date,
    reviewedBy: {type: mongoose.Schema.Types.ObjectId, ref: "Creator"},
    rejectionReason: String,
    ratings: {type: Number, default: 0},
    numReviews: {type: Number, default: 0},
},
{timestamps: true})

module.exports = mongoose.model("Product", productsSchema)