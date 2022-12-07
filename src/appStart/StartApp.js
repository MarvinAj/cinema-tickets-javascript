import express from 'express';
import bodyParser from 'body-parser';

const startApp = (setupRoutes, errorHandler, port = 3000) => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  if (setupRoutes) {
    setupRoutes(app);
  }

  if (errorHandler) {
    errorHandler(app);
  }

  app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });

  return app.server;
};

export default startApp;
