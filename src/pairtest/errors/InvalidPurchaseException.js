import { StatusCodeMessage } from './StatusCode';
import BadRequestError from './BadRequestError';

export default class InvalidPurchaseException extends BadRequestError {
  // eslint-disable-next-line max-len
  constructor(error = StatusCodeMessage.INVALID_PURCHASE) {
    super(StatusCodeMessage.INVALID_PURCHASE, error);
  }
}
