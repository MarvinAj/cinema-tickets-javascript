import { StatusCodeMessage } from './StatusCode.js';
import BadRequestError from './BadRequestError.js';

export default class InvalidPurchaseException extends BadRequestError {
  // eslint-disable-next-line max-len
  constructor(error = StatusCodeMessage.INVALID_PURCHASE) {
    super(StatusCodeMessage.INVALID_PURCHASE, error);
  }
}
