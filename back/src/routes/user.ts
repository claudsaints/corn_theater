import { Router } from "express";
import UserController from '../controllers/userController'

const routes = Router();

routes.post('/', UserController.create );

routes.get('/', UserController.list);

export default routes;