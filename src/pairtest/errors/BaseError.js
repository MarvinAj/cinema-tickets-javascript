export default class BaseError extends Error {
  constructor(statusCode, message = '', error = '') {
    super();
    this.name = this.constructor.name;

    this.error = error;
    this.message = message;
    this.statusCode = statusCode;
  }
}
