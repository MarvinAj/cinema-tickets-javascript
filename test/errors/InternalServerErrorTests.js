import { expect, assert } from 'chai';
import sinon from 'sinon';
import InternalServerError from '../../src/pairtest/errors/InternalServerError.js';
import BaseError from '../../src/pairtest/errors/BaseError.js';

import { StatusCode, StatusCodeMessage } from '../../src/pairtest/errors/StatusCode.js';

describe('InternalServerError Tests', () => {
  let error;
  let expected;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    expected = {
      statusCode: StatusCode.INTERNAL_SERVER,
      error: StatusCodeMessage.INTERNAL_SERVER,
      message: StatusCodeMessage.INTERNAL_SERVER,
      name: 'InternalServerError',
    };
  });

  afterEach(() => {
    error = null;
    sandbox.restore();
  });

  it('Should be of type BaseError', () => {
    error = new InternalServerError('Message', 'Error');
    assert.isTrue(error instanceof BaseError);
  });

  it('Should not have the same error', () => {
    error = new InternalServerError('Message', 'Error');
    expect(error).to.deep.not.equal(expected);
  });

  it('Should match default error values', () => {
    error = new InternalServerError();
    expect(error.message).to.equal(expected.message);
    expect(error.error).to.equal(expected.error);
    expect(error.name).to.equal(expected.name);
    expect(error.statusCode).to.equal(expected.statusCode);
  });
});
