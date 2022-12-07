import invalidRouter from './InvalidRoute.js';
import ticketRoute from './TicketRoute.js';

const setupRoutes = (app) => {
  app.use(invalidRouter);
  app.use(ticketRoute);
};

export default setupRoutes;
