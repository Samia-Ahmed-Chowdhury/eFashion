import mongoose, { Schema } from "mongoose";

const productModel = new Schema(
    {
        category: String,
        subCategory: String,
        img1: String,
        img2: String,
        img3: String,
        details: String,
        price: String,
        rating: String
    }
);

const Product = mongoose.models.products || mongoose.model("products", productModel)

export default Product;