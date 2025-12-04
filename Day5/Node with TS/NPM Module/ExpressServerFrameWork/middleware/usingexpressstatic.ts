import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

// Middleware 1
app.use("/order", (req: Request, res: Response, next: NextFunction) => {
  console.log(`[Middleware 1] Incoming order request at: ${new Date().toISOString()}`);
  next();
});

// Middleware 2
app.use("/order", (req: Request, res: Response, next: NextFunction) => {
  const { customerName, foodItem, quantity } = req.query;

  if (!customerName || !foodItem || !quantity) {
    console.log("[Middleware 2] Validation failed: Missing fields");
    return res.status(400).send("Missing required order fields!");
  }

  console.log("[Middleware 2] Order fields validated");
  next();
});

// Middleware 3
app.use("/order", (req: Request, res: Response, next: NextFunction) => {
  const quantity = Number(req.query.quantity);

  if (quantity <= 0 || quantity > 20) {
    console.log("[Middleware 3] Quantity invalid");
    return res.status(400).send("Quantity must be between 1 and 20.");
  }

  console.log("[Middleware 3] Quantity check passed");
  next();
});

// FINAL HANDLER - GET
app.get("/order", (req: Request, res: Response) => {
  const { customerName, foodItem, quantity } = req.query;

  console.log("[Final Handler] Processing order...");

  res.send(
    `Thank you, ${customerName}! Your order for ${quantity} ${foodItem}(s) has been received.`
  );
});

app.listen(3000, () => {
  console.log("Server started successfully at http://localhost:3000");
});
