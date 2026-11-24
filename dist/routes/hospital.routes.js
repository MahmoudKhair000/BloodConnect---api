import { Router } from 'express';
import { getAllHospitals, getHospitalById, } from '../controllers/hospital.controller.js';
const router = Router();
router.get('/', getAllHospitals);
router.get('/:id', getHospitalById);
export default router;
//# sourceMappingURL=hospital.routes.js.map