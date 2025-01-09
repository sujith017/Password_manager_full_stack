import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb_uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
