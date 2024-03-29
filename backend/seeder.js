import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from 'colors'
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productsModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";



dotenv.config();

connectDB();

