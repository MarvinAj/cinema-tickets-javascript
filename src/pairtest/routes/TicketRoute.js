import express from 'express';
import { validateRequestBody, handleValidationResult } from '../middleware/validation/purchaseTicketValidator.js';
import ticketController from '../controllers/TicketController.js';

const router = express.Router();

router.get('/tickets', (req, res) => {
  res.send('here are my tickits.');
});

router.post('/tickets', validateRequestBody('purchase'), handleValidationResult, ticketController);

export default router;
