import express from 'express';
import {
  getItems,
  addItem,
  updateItem,
  deletItem,
  markCompleteItem,
} from '../controller/itemsController.js';

const router = express.Router();

router.route('/').get(getItems).post(addItem);
router.route('/update').post(updateItem);
router.route('/delete').post(deletItem);
router.route('/markcomplete').post(markCompleteItem);

export default router;
