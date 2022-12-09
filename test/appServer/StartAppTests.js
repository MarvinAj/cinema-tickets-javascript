import { expect } from 'chai';
import startApp from '../../src/appStart/StartApp.js';
import setupRoutes from '../../src/pairtest/routes/RouteSetup.js';
import errorHandler from '../../src/pairtest/middleware/errorHandling/ErrorHandler.js';

describe('StartApp function Tests', () => {
  it('Should thrown TypeError if errorHandler is not of type function', () => {
    expect(() => { const appTest = startApp(setupRoutes, ''); }).to.throw(TypeError, 'errorHandler function is required');
  });

  it('Should thrown TypeError if setupRoutes is not of type function', () => {
    expect(() => { const appTest = startApp('', errorHandler); }).to.throw(TypeError, 'setupRoutes function is required');
  });
});
