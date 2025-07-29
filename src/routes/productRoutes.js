import express from "express";
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  // updateProduct,
} from "../controllers/coffeeController.js";
import coffeeController from "../controllers/coffeeController.js";

const router = express.Router();

router.get("/", coffeeController.getAllProducts);
router.get("/:id", coffeeController.getOneProduct);
router.post("/:id", coffeeController.createProduct);
router.delete("/:id", coffeeController.deleteProduct);

export default router;
