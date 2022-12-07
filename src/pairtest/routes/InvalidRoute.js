import express from 'express';
import invalidPathcontroller from '../controllers/InvalidPathController.js';

const invalidRouter = express.Router();

invalidRouter.get('/invalid', invalidPathcontroller);

export default invalidRouter;
