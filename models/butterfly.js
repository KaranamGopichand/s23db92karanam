const mongoose = require("mongoose")
const butterflySchema = mongoose.Schema({
butterfly_color: String,
butterfly_breed: String,
butterfly_price: Number
})
module.exports = mongoose.model("butterfly",
butterflySchema)