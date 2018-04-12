import { Router } from 'express';
import * as StationController from '../controllers/station.controller';
const router = new Router();
router.route('').get(StationController.getStation);
router.route('/:kioskId').get(StationController.getAllStations);
export default router;
