const orderSummary = (tickets, ticketOrder) => ({

  OrderReference: ticketOrder.getId(),
  AccountId: ticketOrder.getAccountId(),
  Tickets: {
    ...tickets,
    TotalNumberOfTickets: ticketOrder.getTotalNumberOfTickets(),
  },
  TotalNumberOfSeats: ticketOrder.getTotalNumberOfSeats(),
  TotalCost: ticketOrder.getTotalCost(),
});

export default orderSummary;
