import { expect, assert } from 'chai';
import sinon from 'sinon';
import BadRequestError from '../../src/pairtest/errors/BadRequestError.js';
import BaseError from '../../src/pairtest/errors/BaseError.js';

import { StatusCode, StatusCodeMessage } from '../../src/pairtest/errors/StatusCode.js';

describe('BadRequestError Tests', () => {
  let error;
  let expected;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    expected = {
      statusCode: StatusCode.BAD_REQUEST,
      error: StatusCodeMessage.BAD_REQUEST,
      message: StatusCodeMessage.BAD_REQUEST,
      name: 'BadRequestError',
    };
  });

  afterEach(() => {
    error = null;
    sandbox.restore();
  });

  it('Should be of type BaseError', () => {
    error = new BadRequestError('Message', 'Error');
    assert.isTrue(error instanceof BaseError);
  });

  it('Should not have the same error', () => {
    error = new BadRequestError('Message', 'Error');
    expect(error).to.deep.not.equal(expected);
  });

  it('Should match default error values', () => {
    error = new BadRequestError();
    expect(error.message).to.equal(expected.message);
    expect(error.error).to.equal(expected.error);
    expect(error.name).to.equal(expected.name);
    expect(error.statusCode).to.equal(expected.statusCode);
  });
});
