import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    // _id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: String,
      required: true,
    },
    description: { type: String },
    image_url: { type: String },
    origin: { type: String },
    roast_level: { type: String },
    price: { type: String },
    weight_oz: { type: String },
    in_stock: { type: String },
    sale: { type: String },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
