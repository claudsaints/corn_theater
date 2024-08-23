import { Router } from "express";
import UserController from '../controllers/userController'
import { autorizacao } from "../middlewares";

const routes = Router();

routes.post('/cadastro', UserController.create );

routes.post('/login', UserController.login);

routes.post('/logout', UserController.logout);

routes.get('/listar', autorizacao, UserController.list);

export default routes;