import { StatusCode, StatusCodeMessage } from './StatusCode';
import BaseError from './BaseError';

export default class BadRequestError extends BaseError {
  constructor(message = StatusCodeMessage.BAD_REQUEST, error = StatusCodeMessage.BAD_REQUEST) {
    super(StatusCode.BAD_REQUEST, message, error);
  }
}
