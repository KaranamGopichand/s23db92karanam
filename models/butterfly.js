const mongoose = require("mongoose")
const ButterflySchema = mongoose.Schema({
Butterfly_color: String,
Butterfly_breed: {type:String,length:15},
Butterfly_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("Butterfly",ButterflySchema)