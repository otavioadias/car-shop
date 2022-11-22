import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const routes = Router();

routes.put(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).update(),
);

routes.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).create(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).findById(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).findAll(),
);

export default routes;