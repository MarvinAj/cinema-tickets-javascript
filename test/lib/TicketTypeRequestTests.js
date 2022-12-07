import { expect } from 'chai';
import sinon from 'sinon';
import TicketType from '../../src/pairtest/lib/TicketType.js';
import TicketTypeRequest from '../../src/pairtest/lib/TicketTypeRequest.js';

describe('TicketTypeRequest Tests', () => {
  let ticketTypeRequest;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    ticketTypeRequest = null;
    sandbox.restore();
  });

  it('Should thrown TypeError for incorrect ticket type', () => {
    expect(() => { ticketTypeRequest = new TicketTypeRequest('UNKNOWN', 1); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if value is not of type integer', () => {
    expect(() => { ticketTypeRequest = new TicketTypeRequest(TicketType.ADULT, 'Number'); }).to.throw(TypeError);
  });

  it('Should return getter noOfTickets value for new instance', () => {
    ticketTypeRequest = new TicketTypeRequest(TicketType.CHILD, 0);
    expect(ticketTypeRequest.getNoOfTickets()).to.equal(0);
  });

  it('Should return getter ticketType value for new instance', () => {
    ticketTypeRequest = new TicketTypeRequest(TicketType.INFANT, 1);
    expect(ticketTypeRequest.getTicketType()).to.equal(TicketType.INFANT);
  });
});
