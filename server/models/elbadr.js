const mongoose = require("mongoose")


const elbadrSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    ip: String,

    browserName: { type: String },
    browserVersion: { type: String },
    deviceType: { type: String },
    deviceName: { type: String },
}, {
    timestamps: true,
    versionKey: false
})

const elbadrModel = mongoose.model("elbadr", elbadrSchema)
module.exports = elbadrModel