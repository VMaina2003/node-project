import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js"

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
    

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

