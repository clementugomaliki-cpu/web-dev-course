const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        // brand: {
        //     type: String,
        //     required: true
        // },

        image: {
            type: String,
            default: ""
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },

        // rating: {
        //     type: Number,
        //     default: 0
        // },

        // numReviews: {
        //     type: Number,
        //     default: 0
        // }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);