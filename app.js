import express from "express";
import { EmailService } from "./emailService.js";
import { EnventoryService } from "./enventoryService.js";
import { OrderController } from "./orderController.js";
import { OrderService } from "./orderService.js";

const app = express();
const port = 3000;

app.use(express.json());

// dependency initialization
const emailService = new EmailService();
const enventoryService = new EnventoryService();
const orderService = new OrderService(emailService, enventoryService);
const orderController = new OrderController(orderService);

app.post("/order", (req, res) => orderController.createOrder(req, res));

app.get("/", (req, res) => {
  res.send("Project is running...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
