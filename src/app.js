import startApp from './appStart/StartApp.js';
import setupRoutes from './pairtest/routes/RouteSetup.js';
import errorHandler from './pairtest/middleware/errorHandling/ErrorHandler.js';

const port = process.env.PORT || 3000;
const app = startApp(setupRoutes, errorHandler, port);

export const stop = () => app.server.close();

export default app;
