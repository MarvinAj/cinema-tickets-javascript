import startApp from './appStart/StartApp.js';
import setupRoutes from './pairtest/routes/RouteSetup.js';
import errorHandler from './pairtest/middleware/errorHandling/ErrorHandler.js';

const port = process.env.PORT || 3000;

startApp(setupRoutes, errorHandler, port);
