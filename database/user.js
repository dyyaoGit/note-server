const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}, {versionKey: false})

module.exports = mongoose.model("user", user)