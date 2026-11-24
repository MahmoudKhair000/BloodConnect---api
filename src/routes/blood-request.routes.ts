import { Router } from 'express';
import {
	getAllRequests,
	getRequest,
} from '../controllers/blood-request.controller.js';

const router: Router = Router();

router.get('/', getAllRequests);

router.get('/:id', getRequest);

export default router;
