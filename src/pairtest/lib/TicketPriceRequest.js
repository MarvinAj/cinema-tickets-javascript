/**
 * Immutable Object.
 */

export default class TicketPriceRequest {
  #price;

  #totalPrice;

  constructor(type, noOfTickets) {
    if (!this.#Prices.hasOwnProperty(type)) {
      throw new TypeError('invalid ticket type');
    }

    if (!Number.isInteger(noOfTickets)) {
      throw new TypeError('noOfTickets must be an integer');
    }

    this.#price = Number(this.#Prices[type]);
    this.#totalPrice = this.#price * noOfTickets;
    Object.seal(this);
  }

  getPrice() {
    return this.#price;
  }

  getTotalPrice() {
    return this.#totalPrice;
  }

  #Prices = { ADULT: 20, CHILD: 10, INFANT: 0 };
}
