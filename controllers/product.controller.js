import Product from "../models/product.model.js";

// get all products
export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// Create a product
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
}