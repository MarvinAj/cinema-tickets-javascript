import { expect } from 'chai';
import sinon from 'sinon';
import Order from '../../src/pairtest/lib/Order.js';

describe('Order Tests', () => {
  let order;
  let order1;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    order = new Order(1);
  });

  afterEach(() => {
    order = null;
    order1 = null;
    sandbox.restore();
  });

  it('order id should never be empty', () => {
    expect(order.getId()).should.not.be.empty();
  });

  it('should have the totalcost of the value passed to the constructor', () => {
    expect(order.getTotalCost()).to.equal(1);
  });

  it('should update totalcost', () => {
    order.updateCost(100);
    expect(order.getTotalCost()).to.equal(101);
  });
});
