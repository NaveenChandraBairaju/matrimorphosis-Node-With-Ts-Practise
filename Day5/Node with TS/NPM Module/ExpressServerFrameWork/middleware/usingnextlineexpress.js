"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("SERVER FILE LOADED");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Middleware 1
app.use("/order", (req, res, next) => {
    console.log(`[Middleware 1] Incoming order request at: ${new Date().toISOString()}`);
    next();
});
// Middleware 2
app.use("/order", (req, res, next) => {
    const { customerName, foodItem, quantity } = req.query;
    if (!customerName || !foodItem || !quantity) {
        console.log("[Middleware 2] Validation failed: Missing fields");
        return res.status(400).send("Missing required order fields!");
    }
    console.log("[Middleware 2] Order fields validated");
    next();
});
// Middleware 3
app.use("/order", (req, res, next) => {
    const quantity = Number(req.query.quantity);
    if (quantity <= 0 || quantity > 20) {
        console.log("[Middleware 3] Quantity invalid");
        return res.status(400).send("Quantity must be between 1 and 20.");
    }
    console.log("[Middleware 3] Quantity check passed");
    next();
});
// FINAL HANDLER - GET
app.get("/order", (req, res) => {
    const { customerName, foodItem, quantity } = req.query;
    console.log("[Final Handler] Processing order...");
    res.send(`Thank you, ${customerName}! Your order for ${quantity} ${foodItem}(s) has been received.`);
});
app.listen(3000, () => {
    console.log("Server started successfully at http://localhost:3000");
});
