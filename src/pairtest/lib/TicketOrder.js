import crypto from 'crypto';

/* Immutable Object */
class TicketOrder {
  #Id;

  #totalCost;

  #totalNumberOfTickets;

  #totalNumberOfSeats;

  constructor(totalNumberOfTickets = 0, totalCost = 0, totalNumberOfSeats = 0) {
    this.#Id = crypto.randomBytes(16).toString('hex');

    if (!Number.isInteger(totalNumberOfTickets)) {
      throw new TypeError('totalNumberOfTickets must be an integer');
    }

    if (!Number.isInteger(totalCost)) {
      throw new TypeError('totalCost must be an integer');
    }

    if (!Number.isInteger(totalNumberOfSeats)) {
      throw new TypeError('totalNumberOfSeats must be an integer');
    }

    this.#totalNumberOfTickets = totalNumberOfTickets;
    this.#totalCost = totalCost;
    this.#totalNumberOfSeats = totalNumberOfSeats;

    Object.seal(this);
  }

  getTotalCost() {
    return this.#totalCost;
  }

  getTotalNumberOfTickets() {
    return this.#totalNumberOfTickets;
  }

  getId() {
    return this.#Id;
  }

  getTotalNumberOfSeats() {
    return this.#totalNumberOfSeats;
  }
}

export default TicketOrder;
