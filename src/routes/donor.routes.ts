import { Router } from 'express';
import {
	createDonor,
	getAllDonors,
	getDonorById,
	editDonor,
	loginDoner,
} from '../controllers/donor.controller.js';

// Creating Router
const router: Router = Router();

// Getting routes
router.get('/', getAllDonors);
router.get('/:id', getDonorById);
// POST routes
router.post('/new', createDonor);
router.post('/login', loginDoner);
router.post('/edit/:id', editDonor);
// Deleting routes
router.delete('/:id', editDonor);

// Exporting Router
export default router;
