const mongoose = require("mongoose");

const purchasersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    // image: {
    //     type: String,
    //     default: ""
    // },
    isVerified: {
        type: Boolean,
        default: false
    },

    otp: String,
    otpExpiry: Date,
},
{timestamps: true}
)
module.exports = mongoose.model("Purchaser", purchasersSchema)