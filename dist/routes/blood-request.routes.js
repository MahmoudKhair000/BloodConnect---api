import { Router } from 'express';
import { getAllRequests, getRequest, } from '../controllers/blood-request.controller.js';
const router = Router();
router.get('/', getAllRequests);
router.get('/:id', getRequest);
export default router;
//# sourceMappingURL=blood-request.routes.js.map