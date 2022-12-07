import InvalidPurchaseException from '../errors/InvalidPurchaseException.js';
import TicketPaymentService from '../../thirdparty/paymentgateway/TicketPaymentService.js';

class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  static async purchaseTickets(accountId, totalCost) {
    if (!Number.isInteger(accountId)) {
      throw InvalidPurchaseException('accountId is required');
    }

    if (!Number.isInteger(totalCost) || totalCost < 0) {
      throw InvalidPurchaseException('Ticket cost should be greater than 0');
    }
    await new TicketPaymentService().makePayment(accountId, totalCost);
  }
}

export default TicketService;
