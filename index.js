import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
<<<<<<< HEAD
import authRoutes from "./routes/auth.routes.js"
=======
import authRoutes from "./routes/auth.routes.js";
>>>>>>> 871daaec6386c2ce354ab4ee34cb4a788dc6c39a

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

