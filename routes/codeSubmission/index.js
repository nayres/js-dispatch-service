import express from 'express';
import codeSubmission from './codeSubmission';
const router = express.Router();

router.use('/', codeSubmission);
router.use('/codeSubmission', codeSubmission);

export default router;
