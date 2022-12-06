import { expect } from 'chai';
import sinon from 'sinon';
import TicketType from '../../src/pairtest/lib/TicketType.js';
import TicketPriceRequest from '../../src/pairtest/lib/TicketPriceRequest.js';

describe('TicketPriceRequest Tests', () => {
  let ticketPriceRequest;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    ticketPriceRequest = null;
    sandbox.restore();
  });

  it('Should thrown TypeError for invalid ticket type', () => {
    expect(() => { ticketPriceRequest = new TicketPriceRequest('UNKNOWN', 1); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if value is not of type integer', () => {
    expect(() => { ticketPriceRequest = new TicketPriceRequest(TicketType.ADULT, 'Number'); }).to.throw(TypeError);
  });

  it('Should return getter noOfTickets value for new instance', () => {
    ticketPriceRequest = new TicketPriceRequest(TicketType.CHILD, 1);
    expect(ticketPriceRequest.getPrice()).to.equal(10);
  });

  it('Should return getter ticketType value for new instance', () => {
    ticketPriceRequest = new TicketPriceRequest(TicketType.ADULT, 2);
    expect(ticketPriceRequest.getTotalPrice()).to.equal(40);
  });
});
