const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", required: true
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product", required: true
                },
                quantity: {
                    type: Number, required: true, min: 1
                },
                price: {
                    type: Number, required: true, min: 0
                }
            }
        ],

        totalPrice: {
            type: Number, required: true, min: 0
        },

        shippingAddress: {type: String, required: true, trim: true},

        paymentMethod: {type: String,
            enum: ["Cash on Delivery", "Card", "Transfer"],
            default: "Transfer"
        },

        status: {
            type: String,
            enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);