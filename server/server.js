import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();

app.use(express.json());

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${Port}`);

});
