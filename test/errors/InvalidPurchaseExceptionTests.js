import { expect, assert } from 'chai';
import sinon from 'sinon';
import InvalidPurchaseException from '../../src/pairtest/errors/InvalidPurchaseException.js';
import BadRequestError from '../../src/pairtest/errors/BadRequestError.js';

import { StatusCode, StatusCodeMessage } from '../../src/pairtest/errors/StatusCode.js';

describe('InvalidPurchaseException Tests', () => {
  let error;
  let expected;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    expected = {
      statusCode: StatusCode.BAD_REQUEST,
      error: StatusCodeMessage.INVALID_PURCHASE,
      message: StatusCodeMessage.INVALID_PURCHASE,
      name: 'InvalidPurchaseException',
    };
  });

  afterEach(() => {
    error = null;
    sandbox.restore();
  });

  it('Should be of type BadRequestError', () => {
    error = new InvalidPurchaseException('Message', 'Error');
    assert.isTrue(error instanceof BadRequestError);
  });

  it('Should not have the same error', () => {
    error = new InvalidPurchaseException('Message', 'Error');
    expect(error).to.deep.not.equal(expected);
  });

  it('Should match default error values', () => {
    error = new InvalidPurchaseException();
    expect(error.message).to.equal(expected.message);
    expect(error.error).to.equal(expected.error);
    expect(error.name).to.equal(expected.name);
    expect(error.statusCode).to.equal(expected.statusCode);
  });
});
