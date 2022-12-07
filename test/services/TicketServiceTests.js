import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import TicketService from '../../src/pairtest/services/TicketService.js';
import InvalidPurchaseException from '../../src/pairtest/errors/InvalidPurchaseException.js';

describe('Order Tests', () => {
  let sandbox;

  beforeEach(() => {
    chai.use(chaiAsPromised);

    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should succesfully complete purchase', () => {
    expect(TicketService.purchaseTickets(2, 60)).to.eventually.be.not.rejected;
  });

  it('Should thrown InvalidPurchaseException if totalCost is not of type integer', () => {
    expect(TicketService.purchaseTickets(1, '')).to.eventually.be.rejectedWith(InvalidPurchaseException);
  });

  it('Should thrown InvalidPurchaseException if accountId is not of type integer', () => {
    expect(TicketService.purchaseTickets('', 60)).to.eventually.be.rejectedWith(InvalidPurchaseException);
  });
});
