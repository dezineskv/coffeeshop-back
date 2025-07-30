import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./config/mongoose.js";
import mongoose from "mongoose";
import cors from "cors";
// import Product from "./models/Product.js";
// import path from "path";
import productRoutes from "./routes/productRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongoDB();
// mongoose.connect('mongodb://localhost:27017/bikeStoreDB')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error(err));

app.options("*", (req, res) => {
  res.sendStatus(200);
});
//Middleware for prod/dev environments
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:3001",
      credentials: true,
    })
  );
} else if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "https://coffeeshop-front.vercel.app/",
      credentials: true,
    })
  );
}

app.use(express.json());
app.use("/api/data", productRoutes);

// Define an API route
// app.get("/api/data", (req: Request, res: Response) => {
//   res.send("Hello from Express with TypeScript & MongoDB!");
// });

// const Product = mongoose.model("Product", ProductSchema);

app.get("/", (req, res) => {
  res.send("Express server is running with TypeScript!");
});

// app.get("/", async (req, res) => {
//   res.json({ message: "Data from Express API" });
//   try {
//     const products = await Product.find(); // Fetch all documents from "items" collection
//     res.json({ products }); // Send back as JSON
//   } catch (err) {
//     console.error("Error fetching data from MongoDB:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// app.get("/api/data/:id", async (req, res) => {
//   const id = req.params.id;
//   const product = await Product.findById(id);
//   res.json(product);
//   if (!product) return res.status(404).send({ error: "Product not found" });
// });
// });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
