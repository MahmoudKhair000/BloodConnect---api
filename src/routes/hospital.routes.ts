import { Router } from 'express';
import {
	getAllHospitals,
	getHospitalById,
} from '../controllers/hospital.controller.js';

const router: Router = Router();

router.get('/', getAllHospitals);
router.get('/:id', getHospitalById);

export default router;
