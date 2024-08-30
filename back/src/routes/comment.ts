import {Router} from 'express'
import Comment from '../controllers/commentController'
import { autorizacao } from '../middlewares';

const routes = Router();

routes.post("/criar", autorizacao, Comment.saveComment);

routes.post("/buscar", Comment.searchCommnet);


export default routes;
