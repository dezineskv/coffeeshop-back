import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const MONGODB = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected...");
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// const MONGO_URI = "mongodb://localhost:27017/bikeStoreDB";

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

export default connectToMongoDB;
