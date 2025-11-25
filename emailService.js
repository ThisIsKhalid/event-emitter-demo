export class EmailService {
  sendEmail(orderData) {
    console.log(`Sending email for order: ${JSON.stringify(orderData)}`);
  }
}
