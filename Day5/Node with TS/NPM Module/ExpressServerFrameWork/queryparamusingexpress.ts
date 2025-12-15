import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

// Sample Orders Data
const orders = [
  { id: "0101", customer: "John Doe", amount: 1500, status: "pending" },
  { id: "0102", customer: "Jane Smith", amount: 5000, status: "shipped" },
  { id: "0103", customer: "Alice Johnson", amount: 2000, status: "delivered" },
  { id: "0104", customer: "David Lee", amount: 7000, status: "pending" },
  { id: "0105", customer: "Chris Evans", amount: 2500, status: "shipped" },
];

/*
📌 Route: Get Orders with Query Parameters
Example:
http://localhost:3000/orders?minAmount=2000
http://localhost:3000/orders?status=pending
http://localhost:3000/orders?minAmount=2000&maxAmount=8000
http://localhost:3000/orders?status=shipped
*/

app.get("/orders", (req: Request, res: Response) => {
  let filteredOrders = [...orders];

  // Filter by status (pending, shipped, delivered)
  if (req.query.status) {
    filteredOrders = filteredOrders.filter(
      (o) => o.status.toLowerCase() === (req.query.status as string).toLowerCase()
    );
  }

  // Filter by Amount Range
  if (req.query.minAmount) {
    filteredOrders = filteredOrders.filter(
      (o) => o.amount >= parseInt(req.query.minAmount as string)
    );
  }

  if (req.query.maxAmount) {
    filteredOrders = filteredOrders.filter(
      (o) => o.amount <= parseInt(req.query.maxAmount as string)
    );
  }

  // Filter by Customer Name
  if (req.query.customer) {
    filteredOrders = filteredOrders.filter(
      (o) =>
        o.customer.toLowerCase().includes(
          (req.query.customer as string).toLowerCase()
        )
    );
  }

  res.json(filteredOrders);
});

// ⭐ Start the server
app.listen(PORT, () => {
  console.log(`E-Commerce Order API running at http://localhost:${PORT}`);
});