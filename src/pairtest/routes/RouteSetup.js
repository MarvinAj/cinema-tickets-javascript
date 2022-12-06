import invalidRouter from './InvalidRoute.js';

const setupRoutes = (app) => {
  app.use(invalidRouter);
};

export default setupRoutes;
