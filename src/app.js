import { config } from "dotenv";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/data", productRoutes);
// app.get("/api/data/:id", async (req, res) => {
//   const id = req.params.id;
//   const product = await Product.findById(id);
//   if (!product) return res.status(404).send({ error: "Product not found" });
//   res.json(product);
// });

export default app;
