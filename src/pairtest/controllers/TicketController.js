import createTickets from '../lib/CreateTickets.js';
import TicketService from '../services/TicketService.js';
import SeatReservationService from '../../thirdparty/seatbooking/SeatReservationService.js';
import orderSummary from '../lib/TicketOrderResult.js';
import validateTicket from '../lib/ValidateTicket.js';

const ticketController = async (req, res, next) => {
  try {
    const { accountId, tickets } = req.body;

    const order = createTickets(accountId, tickets);
    await validateTicket(tickets, order);
    new SeatReservationService().reserveSeat(accountId, order.getTotalNumberOfSeats());
    TicketService.purchaseTickets(accountId, order.getTotalCost());

    res.json(orderSummary(tickets, order));
  } catch (error) {
    next(error);
  }
};

export default ticketController;
