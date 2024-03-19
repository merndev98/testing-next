import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
    {
        title: { type: String },
        description: { type: String },
        price: { type: String }
    },
    {
        timestamps: {
            currentTime: () => Date.now() + 19800000 // IST timezone offset in milliseconds (19800000 ms = 5 hours 30 minutes)
        }
    }
);

const Product = models.Product || mongoose.model("products", productSchema);
export default Product;
