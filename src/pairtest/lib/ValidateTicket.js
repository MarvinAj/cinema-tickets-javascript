import validationEngine from './ValidationEngine.js';
import ticketRules from '../validationRules/TicketValidationRules.js';

const validateTicket = async (tickets, order) => {
  const { infant, adult } = tickets;
  let numberOfInfants = 0;
  if (infant) {
    numberOfInfants = infant;
  }
  await validationEngine(ticketRules).run({
    maxNumberOfTickets: order.getTotalNumberOfTickets(),
    minNumberOfAdultTickets: adult,
    moreOrEqualAdultToInfantRatio: adult >= numberOfInfants,
  });
};

export default validateTicket;
