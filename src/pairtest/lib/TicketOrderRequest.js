/* eslint-disable max-len */
import TicketOrder from './TicketOrder.js';
import TicketTypeRequest from './TicketTypeRequest.js';
import TicketType from './TicketType.js';
import TicketPriceRequest from './TicketPriceRequest.js';

/*  Immutable Object */
class TicketOrderRequest extends TicketOrder {
  #accountId;

  constructor(accountId, ticketOrderRequests = []) {
    if (!Number.isInteger(accountId)) {
      throw new TypeError('accountId must be an integer');
    }

    const ticketTypeRequestSet = new Set(ticketOrderRequests.map((x) => typeof x));
    const [ticketTypeRequest] = ticketTypeRequestSet;

    if (ticketOrderRequests.length === 0
        || (ticketTypeRequestSet.size <= 1 && ticketTypeRequest instanceof TicketTypeRequest)) {
      throw new TypeError('Requests must be of type TicketTypeRequest');
    }

    const totalCostOftickets = ticketOrderRequests.reduce((accumulator, ticket) => accumulator + new TicketPriceRequest(ticket.getTicketType(), ticket.getNoOfTickets()).getTotalPrice(), 0);
    const totalNumberOfTickets = ticketOrderRequests.reduce((accumulator, ticket) => accumulator + ticket.getNoOfTickets(), 0);
    const totalNumberOfSeats = ticketOrderRequests.filter((x) => x.getTicketType() !== TicketType.INFANT).reduce((accumulator, ticket) => accumulator + ticket.getNoOfTickets(), 0);

    super(totalNumberOfTickets, totalCostOftickets, totalNumberOfSeats);
    this.#accountId = accountId;

    Object.seal(this);
  }

  getAccountId() { return this.#accountId; }
}

export default TicketOrderRequest;
