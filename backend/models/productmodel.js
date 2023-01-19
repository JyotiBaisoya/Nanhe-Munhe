const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:String,
    price:String,
    ctegory:String,
    image:String
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = {
    ProductModel
}