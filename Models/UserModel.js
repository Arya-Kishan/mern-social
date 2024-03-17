const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Name!"],
        minLength: [3, "Name must contain at least 3 Characters!"],
        maxLength: [30, "Name cannot exceed 30 Characters!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your Email!"],
    },
    phone: {
        type: Number,
        required: [true, "Please enter your Phone Number!"],
    },
    password: {
        type: String,
        required: [true, "Please provide a Password!"],
        minLength: [8, "Password must contain at least 8 characters!"],
        maxLength: [32, "Password cannot exceed 32 characters!"],
        select: false,
    },
    role: {
        type: String,
        required: [true, "Please select a role"],
        enum: ["applicant", "employer"],
    },
    friends:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default:[],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

exports.User = mongoose.model("User", userSchema)