import { StatusCodeMessage, StatusCode } from './StatusCode';
import BaseError from './BaseError';

export default class InputValidationError extends BaseError {
  // eslint-disable-next-line max-len
  constructor(error = StatusCodeMessage.VALIDATION_ERROR) {
    super(StatusCode.UNPROCESSABLE_ENTITY, StatusCodeMessage.VALIDATION_ERROR, error);
  }
}
