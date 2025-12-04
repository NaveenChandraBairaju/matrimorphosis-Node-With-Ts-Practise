import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Sample product data
const products = [
  { id: "101", name: "Laptop", category: "electronics", price: 50000 },
  { id: "102", name: "Smartphone", category: "electronics", price: 30000 },
  { id: "103", name: "Shoes", category: "fashion", price: 2000 },
];

// 📘 API Route: Get All Products (Returns JSON)
app.get("/products", (req: Request, res: Response) => {
  console.log(products);
  res.status(200).json(products);
});

// 🟦 API Route: Get Product by ID (Dynamic Route)
app.get("/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// 🟩 API Route: Get Products by Category (Dynamic Route)
app.get("/categories/:category", (req: Request, res: Response) => {
  const categoryProducts = products.filter(
    (p) => p.category === req.params.category
  );

  if (categoryProducts.length > 0) {
    res.json(categoryProducts);
  } else {
    res.status(404).send("No products found in this category");
  }
});

// 🚀 Start the Server
app.listen(PORT, () => {
  console.log(`E-Commerce API running at http://localhost:${PORT}`);
});