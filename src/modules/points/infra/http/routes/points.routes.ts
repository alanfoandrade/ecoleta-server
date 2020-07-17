import { Router } from 'express';

import PointsController from '../controllers/PointsController';

const pointsRouter = Router();
const pointsController = new PointsController();

pointsRouter.get('/', pointsController.index);

pointsRouter.post('/', pointsController.create);

pointsRouter.get('/:id', pointsController.show);

export default pointsRouter;
