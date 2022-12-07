import validationEngine from './ValidationEngine.js';
import ticketRules from '../validationRules/TicketValidationRules.js';

const validateTicket = async (tickets, order) => {
  await validationEngine(ticketRules).run({
    maxNumberOfTickets: order.getTotalNumberOfTickets(),
    minNumberOfAdultTickets: tickets.adult,
    moreOrEqualAdultToInfantRatio: tickets.adult >= tickets.infant,
  });
};

export default validateTicket;
