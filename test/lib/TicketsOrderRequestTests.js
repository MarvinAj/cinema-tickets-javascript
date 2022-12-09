import { expect, assert } from 'chai';
import sinon from 'sinon';
import TicketOrderRequest from '../../src/pairtest/lib/TicketOrderRequest.js';
import TicketOrder from '../../src/pairtest/lib/TicketOrder.js';
import createTickets from '../../src/pairtest/lib/CreateTickets.js';

describe('TicketOrderRequest Tests', () => {
  let ticketOrderRequest;
  let ticketOrderRequest1;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const tickets = {
      adult: 2,
      child: 6,
      infant: 1,
    };
    ticketOrderRequest = createTickets(1, tickets);
  });

  afterEach(() => {
    ticketOrderRequest = null;
    ticketOrderRequest1 = null;
    sandbox.restore();
  });

  it('Should be of type TicketOrderRequest', () => {
    assert.isTrue(ticketOrderRequest instanceof TicketOrderRequest);
  });

  it('Should thrown TypeError if accountId is not of type integer', () => {
    expect(() => { ticketOrderRequest1 = new TicketOrderRequest('', [new TicketOrder(1, 1, 1)]); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if ticketOrderRequest array contains an element with a wrong type', () => {
    expect(() => { ticketOrderRequest1 = new TicketOrderRequest(1, ['hello', '', 1]); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if ticketOrderRequest array is Empty', () => {
    expect(() => { ticketOrderRequest1 = new TicketOrderRequest(1, []); }).to.throw(TypeError);
  });

  it('Should return getter totalNumberOfTickets value', () => {
    expect(ticketOrderRequest.getTotalNumberOfTickets()).to.equal(9);
  });

  it('Should return getter ticketType value', () => {
    expect(ticketOrderRequest.getTotalCost()).to.equal(100);
  });

  it('Should return getter totalCost value', () => {
    expect(ticketOrderRequest.getTotalNumberOfSeats()).to.equal(8);
  });
});
