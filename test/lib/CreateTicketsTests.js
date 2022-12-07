import { expect, assert } from 'chai';
import sinon from 'sinon';
import TicketOrderRequest from '../../src/pairtest/lib/TicketOrderRequest.js';
import createTickets from '../../src/pairtest/lib/CreateTickets.js';

describe('CreateTicketsTest Tests', () => {
  let ticketOrderRequest;
  let ticketOrderRequest1;
  let tickets;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    tickets = {
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
    expect(() => { ticketOrderRequest1 = createTickets('', tickets); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if tickets object is empty', () => {
    expect(() => { ticketOrderRequest1 = createTickets(1, {}); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if ttickets object is contains the wrong type', () => {
    expect(() => {
      ticketOrderRequest1 = createTickets(1, {
        adult: 2,
        child: 6,
        infant: '',
      });
    }).to.throw(TypeError);
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
