import {
  errorLogger, errorResponder, invalidPathHandler,
} from './MiddlewareError.js';

const errorHandler = (app) => {
  app.use(errorLogger);
  app.use(errorResponder);
  app.use(invalidPathHandler);
};

export default errorHandler;
