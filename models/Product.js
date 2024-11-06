import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId ,
      ref: "Category",
      required: false,
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    quantity: { type: Number, required: true },
    featured: { type: Boolean, required: false },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductsSchema);

export default Product;
