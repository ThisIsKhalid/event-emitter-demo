import { EventEmitter } from "node:events";

export class OrderService extends EventEmitter {
  createOrder(orderData) {
    // Business logic to create an order

    console.log("Order created");
    this.emit("order:created", orderData);
    console.log("Event emitted: order:created");

    return {
      id: Date.now().toString(),
      ...orderData,
    };
  }
}
