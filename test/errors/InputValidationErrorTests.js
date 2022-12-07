import { expect, assert } from 'chai';
import sinon from 'sinon';
import InputValidationError from '../../src/pairtest/errors/InputValidationError.js';
import BaseError from '../../src/pairtest/errors/BaseError.js';

import { StatusCode, StatusCodeMessage } from '../../src/pairtest/errors/StatusCode.js';

describe('InvalidPurchaseException Tests', () => {
  let error;
  let expected;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    expected = {
      statusCode: StatusCode.UNPROCESSABLE_ENTITY,
      error: StatusCodeMessage.VALIDATION_ERROR,
      message: StatusCodeMessage.VALIDATION_ERROR,
      name: 'InputValidationError',
    };
  });

  afterEach(() => {
    error = null;
    sandbox.restore();
  });

  it('Should be of type BaseError', () => {
    error = new InputValidationError('Message', 'Error');
    assert.isTrue(error instanceof BaseError);
  });

  it('Should not have the same error', () => {
    error = new InputValidationError('Message', 'Error');
    expect(error).to.deep.not.equal(expected);
  });

  it('Should match default error values', () => {
    error = new InputValidationError();
    expect(error.message).to.equal(expected.message);
    expect(error.error).to.equal(expected.error);
    expect(error.name).to.equal(expected.name);
    expect(error.statusCode).to.equal(expected.statusCode);
  });
});
