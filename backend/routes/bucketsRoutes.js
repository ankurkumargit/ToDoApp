import express from 'express';
import {
  getBuckets,
  addBucket,
  updateBucket,
  deleteBucket,
} from '../controller/bucketsController.js';

const router = express.Router();

router.route('/').get(getBuckets).post(addBucket);
router.route('/update').post(updateBucket);
router.route('/delete/:id').post(deleteBucket);

export default router;
