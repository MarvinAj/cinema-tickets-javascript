import TicketTypeRequest from './TicketTypeRequest.js';
import TicketOrderRequest from './TicketOrderRequest.js';

const createTickets = (accountId, tickets) => {
  const order = [];

  // eslint-disable-next-line max-len
  Object.entries(tickets).map((x) => order.push(new TicketTypeRequest(x[0].toUpperCase(), x[1])));
  const ticketOrderRequest = new TicketOrderRequest(accountId, order);
  return ticketOrderRequest;
};

export default createTickets;
