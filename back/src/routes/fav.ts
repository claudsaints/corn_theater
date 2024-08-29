import {Router} from 'express'

import Filme from '../controllers/tmdbController'
import { autorizacao } from '../middlewares';

const routes = Router();

routes.post('/listar',autorizacao, Filme.listarFavorito);

routes.post('/salvar', autorizacao, Filme.salvarFavorito);

export default routes;

