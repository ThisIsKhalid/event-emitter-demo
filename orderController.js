export class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  createOrder(req, res) {
    const orderData = req.body;
    const result = this.orderService.createOrder(orderData);

    return res.status(201).send({
      message: "Order created successfully",
      order: result,
    });
  }
}
