import { Document, Types } from "mongoose";
import Product from "../models/Product.js";
// import { Request, Response, NextFunction } from "express";

// get all products
export async function getAllProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // -1 sorts in descending order (newest first)
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// get one product
export async function getOneProduct(req, res) {
  console.log("req.params", req.params);
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error in getProductById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createProduct(req, res) {
  try {
    const {
      title,
      description,
      origin,
      roast_level,
      price,
      weight_oz,
      in_stock,
      sale,
      image_url,
    } = req.body;
    const product = new Product({
      title,
      description,
      origin,
      roast_level,
      price,
      weight_oz,
      in_stock,
      sale,
      image_url,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error in createProduct controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteProduct(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteProduct controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  
};
