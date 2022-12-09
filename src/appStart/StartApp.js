import express from 'express';
import bodyParser from 'body-parser';

const startApp = (setupRoutes, errorHandler, port = 3000) => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  if (typeof setupRoutes !== 'function') {
    throw TypeError('setupRoutes function is required');
  }

  if (typeof errorHandler !== 'function') {
    throw TypeError('errorHandler function is required');
  }

  setupRoutes(app);
  errorHandler(app);

  app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });

  return app;
};

export default startApp;
