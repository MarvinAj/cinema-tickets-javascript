import crypto from 'crypto';
import Order from './Order.js';

/* Immutable Object */
class TicketOrder extends Order {
  #totalNumberOfTickets;

  #totalNumberOfSeats;

  constructor(totalNumberOfTickets = 0, totalCost = 0, totalNumberOfSeats = 0) {
    if (!Number.isInteger(totalNumberOfTickets)) {
      throw new TypeError('totalNumberOfTickets must be an integer');
    }

    if (!Number.isInteger(totalCost)) {
      throw new TypeError('totalCost must be an integer');
    }

    if (!Number.isInteger(totalNumberOfSeats)) {
      throw new TypeError('totalNumberOfSeats must be an integer');
    }

    super(totalCost);

    this.#totalNumberOfTickets = totalNumberOfTickets;
    this.#totalNumberOfSeats = totalNumberOfSeats;

    Object.seal(this);
  }

  getTotalNumberOfTickets() {
    return this.#totalNumberOfTickets;
  }

  getTotalNumberOfSeats() {
    return this.#totalNumberOfSeats;
  }
}

export default TicketOrder;
