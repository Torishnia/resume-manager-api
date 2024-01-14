import express from 'express';

import resume from './resume';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OK'));

router.use('/resumes', resume);

export default router;
