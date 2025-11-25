export class EmailService {
  constructor(orderEmitter) {
    this.orderEmitter = orderEmitter;

    orderEmitter.on("order:created", this.sendEmail);
  }

  sendEmail(orderData) {
    console.log(`Sending email for order: ${JSON.stringify(orderData)}`);
  }
}
