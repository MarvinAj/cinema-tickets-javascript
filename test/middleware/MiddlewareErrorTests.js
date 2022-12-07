import 'should';
import sinon from 'sinon';
import { StatusCode } from '../../src/pairtest/errors/StatusCode.js';
import { errorLogger, errorResponder } from '../../src/pairtest/middleware/errorHandling/MiddlewareError.js';
import BadRequestError from '../../src/pairtest/errors/BadRequestError.js';
import BaseError from '../../src/pairtest/errors/BaseError.js';

const sandbox = sinon.createSandbox();
describe('MiddlewareError Tests:', () => {
  let error;
  let res;
  let next;
  let baseError;

  beforeEach(() => {
    error = new BadRequestError();
    baseError = new BaseError('', 'Undefined  message', 'Undefined error ');

    next = sandbox.spy();
    res = {
      status: sinon.spy(),
      send: sinon.spy(),
      json: sinon.spy(),
      redirect: sinon.spy(),
    };
  });

  afterEach(() => {
    error = null;
    sandbox.restore();
  });

  describe('errorLogger', () => {
    it('should return correct message', () => {
      errorLogger(error, {}, res, next);
      const expectedErrorMssage = sandbox.match.instanceOf(Error).and(sandbox.match.has('message', error.message));
      sandbox.assert.calledWith(next, sandbox.match(expectedErrorMssage));
    });

    it('should return correct error', () => {
      errorLogger(error, {}, res, next);
      const expectedError = sandbox.match.instanceOf(Error).and(sandbox.match.has('error', error.error));
      sandbox.assert.calledWith(next, sandbox.match(expectedError));
    });

    it('should return 500 status with correct statusCode', () => {
      errorLogger(error, {}, res, next);
      const expectedStatusCode = sandbox.match.instanceOf(Error).and(sandbox.match.has('statusCode', error.statusCode));
      sandbox.assert.calledWith(next, sandbox.match(expectedStatusCode));
    });
  });

  describe('errorResponder', () => {
    it('should have 500 response error status', () => {
      errorResponder(error, {}, res, next);
      res.status.calledWith(StatusCode.BAD_REQUEST).should.equal(true);
      res.send.calledWith(JSON.stringify(error, null, 4)).should.equal(true);
    });

    it('should return status code 500 for any undefine statuscode', () => {
      errorResponder(baseError, {}, res, next);
      res.status.calledWith(StatusCode.INTERNAL_SERVER).should.equal(true);
    });
  });
});
