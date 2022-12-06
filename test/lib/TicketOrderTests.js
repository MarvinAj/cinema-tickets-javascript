import { expect } from 'chai';
import sinon from 'sinon';
import TicketType from '../../src/pairtest/lib/TicketType.js';
import TicketOrder from '../../src/pairtest/lib/TicketOrder.js';

describe('TicketOrder Tests', () => {
  let ticketOrder;
  let ticketOrder1;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    ticketOrder1 = new TicketOrder(3, 60, 4);
  });

  afterEach(() => {
    ticketOrder = null;
    ticketOrder1 = null;
    sandbox.restore();
  });

  it('Should thrown TypeError if totalNumberOfTickets is not of type integer', () => {
    expect(() => { ticketOrder = new TicketOrder(TicketType.ADULT, 1, 1); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if totalCost is not of type integer', () => {
    expect(() => { ticketOrder = new TicketOrder(1, TicketType.ADULT, 'Number'); }).to.throw(TypeError);
  });

  it('Should thrown TypeError if totalNumberOfSeats is not of type integer', () => {
    expect(() => { ticketOrder = new TicketOrder(TicketType.ADULT, 1, 'Number'); }).to.throw(TypeError);
  });

  it('Should return getter totalNumberOfTickets value', () => {
    expect(ticketOrder1.getTotalNumberOfTickets()).to.equal(3);
  });

  it('Should return getter ticketType value', () => {
    expect(ticketOrder1.getTotalCost()).to.equal(60);
  });

  it('Should return getter totalCost value', () => {
    expect(ticketOrder1.getTotalNumberOfSeats()).to.equal(4);
  });
});
