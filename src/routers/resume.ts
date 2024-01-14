import express from 'express';

import {
  getAllResume,
  getResumeById,
  createResume,
  updateResume,
  deleteResume,
} from '../controllers/Resume';

const router = express.Router();

router.get('/', getAllResume);
router.get('/:id', getResumeById);

router.post('/create', createResume);
router.patch('/:id', updateResume);
router.delete('/:id', deleteResume);

export default router;
