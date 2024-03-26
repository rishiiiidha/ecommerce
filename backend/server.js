import express from "express";
import products from "./data/products.js"
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173' // Replace with your frontend's URL
}));
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id = req.params.id)
  res.json(product)
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
