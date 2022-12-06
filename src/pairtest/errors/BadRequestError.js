import { StatusCode, StatusCodeMessage } from './StatusCode.js';
import BaseError from './BaseError.js';

export default class BadRequestError extends BaseError {
  constructor(message = StatusCodeMessage.BAD_REQUEST, error = StatusCodeMessage.BAD_REQUEST) {
    super(StatusCode.BAD_REQUEST, message, error);
  }
}
