export class OrderService {
  constructor(emailService, enventoryService) {
    this.emailService = emailService;
    this.enventoryService = enventoryService;
  }

  createOrder(orderData) {
    // Business logic to create an order

    console.log("Order created:", orderData);

    // Send confirmation email
    this.emailService.sendEmail(orderData);

    // Update inventory
    this.enventoryService.updateInventory(orderData);

    return { ...orderData };
  }
}
