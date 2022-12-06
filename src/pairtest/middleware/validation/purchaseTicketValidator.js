/* eslint-disable default-case */
import { check, validationResult } from 'express-validator';
import InputValidationError from '../../errors/InputValidationError';

// eslint-disable-next-line consistent-return
export const validateRequestBody = (method) => {
  switch (method) {
    case 'purchase': {
      return [
        check('accountId', 'accountId must be an integer and greater than 0').exists().isInt({ min: 1 }),
        check('tickets.adult', 'adults is required and must be an integer').exists().isInt({ min: 0 }),
        check('tickets.child', 'children is required and must be an integer').optional().isInt({ min: 0 }),
        check('tickets.infant', 'infants is required and must be an integer').optional().isInt({ min: 0 }),
      ];
    }
  }
};

export const handleValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    next(new InputValidationError(errors.array()));
  }
  next();
};
