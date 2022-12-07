import crypto from 'crypto';

/* Immutable Object */
class Order {
  #Id;

  #cost;

  constructor(cost = 0) {
    this.#Id = crypto.randomBytes(16).toString('hex');
    this.#cost = cost;

    Object.seal(this);
  }

  getId() {
    return this.#Id;
  }

  getTotalCost() {
    return this.#cost;
  }

  updateCost(cost) {
    this.#cost += cost;
  }
}

export default Order;
