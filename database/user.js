const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {versionKey: false})

module.exports = mongoose.model("user", user)