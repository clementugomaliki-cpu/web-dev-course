const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const creatorsSchema = new mongoose.Schema({
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
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: String,
    otpExpiry: Date,
},
{timestamps: true}
)
module.exports = mongoose.model("Creator", creatorsSchema)