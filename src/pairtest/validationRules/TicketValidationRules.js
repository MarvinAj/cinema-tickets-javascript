import InvalidPurchaseException from '../errors/InvalidPurchaseException';

const ticketRules = [
  {
    conditions: {
      all: [{
        fact: 'maxNumberOfTickets',
        operator: 'lessThanInclusive',
        value: 20,
      }],
    },
    event: { type: 'max-tickets' },
    onFailure() { throw new InvalidPurchaseException('Only a maximum of 20 tickets can be purchased at a time.'); },
    onSuccess() {
      console.log('max-tickets check was successful');
    },
  },
  {
    conditions: {
      all: [{
        fact: 'minNumberOfAdultTickets',
        operator: 'greaterThan',
        value: 0,
      }],
    },
    event: { type: 'min-adult-ticket' },
    onFailure() {
      throw new InvalidPurchaseException('Child and Infant tickets cannot be purchased without purchasing an Adult ticket');
    },
    onSuccess() {
      console.log('min-adult-ticket check was successful');
    },
  },
  {
    conditions: {
      all: [{
        fact: 'moreOrEqualAdultToInfantRatio',
        operator: 'equal',
        value: true,
      }],
    },
    event: { type: 'adult_infant_ratio' },
    onFailure() {
      throw new InvalidPurchaseException('Infants do not pay for a ticket and are not allocated a seat but only one infant can sit on an adult lap');
    },
    onSuccess() {
      console.log('adult_infant_ratio check was successful');
    },
  },
];

export default ticketRules;
