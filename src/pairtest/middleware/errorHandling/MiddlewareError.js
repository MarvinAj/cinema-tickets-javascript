import InternalServerError from '../../errors/InternalServerError.js';

/* eslint-disable no-unused-vars */
export const errorLogger = (err, req, res, next) => {
  // console.error('\x1b[31m', err);
  next(err);
};

export const errorResponder = (err, req, res, next) => {
  // res.header('Content-Type', 'application/json');

  let error = err;
  if (!err.statusCode) {
    error = new InternalServerError(err.message);
  }
  res.status(error.statusCode);
  res.send(JSON.stringify(error, null, 4));
};

export const invalidPathHandler = (req, res, next) => {
  res.redirect('/invalid');
};
