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
const orderService = new OrderService();
const orderController = new OrderController(orderService);

// register event listeners
orderService.on("order:created", async (orderData) => {
  console.log(
    "Event received: order:created, sending email processing",
    orderData
  );

  emailService.sendEmail(orderData);
});

orderService.on("order:created", async (orderData) => {
  console.log("Event received: order:created, enventory processing", orderData);

  enventoryService.updateInventory(orderData);
});

app.post("/order", (req, res) => orderController.createOrder(req, res));

app.get("/", (req, res) => {
  res.send("Project is running...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
