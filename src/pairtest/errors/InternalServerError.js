import { StatusCode, StatusCodeMessage } from './StatusCode.js';
import BaseError from './BaseError.js';

export default class InternalServerError extends BaseError {
  // eslint-disable-next-line max-len
  constructor(error = StatusCodeMessage.INTERNAL_SERVER, message = StatusCodeMessage.INTERNAL_SERVER) {
    super(StatusCode.INTERNAL_SERVER, message, error);
  }
}
