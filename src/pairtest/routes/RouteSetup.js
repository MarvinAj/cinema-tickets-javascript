import Express from 'express';
import invalidRouter from './InvalidRoute.js';
import ticketRoute from './TicketRoute.js';

const setupRoutes = (app) => {
  if (app instanceof Express) {
    throw TypeError('app should be of type Express');
  }
  app.use(invalidRouter);
  app.use(ticketRoute);
};

export default setupRoutes;
