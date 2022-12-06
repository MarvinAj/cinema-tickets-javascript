import express from 'express';
import invalidPathcontroller from '../controllers/InvalidPathController.js';

const invalidRouter = express.Router();

errorRouter.get('/invalid', invalidPathcontroller);

export default invalidRouter;
