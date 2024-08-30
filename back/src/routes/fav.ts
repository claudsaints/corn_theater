import {Router} from 'express'

import Filme from '../controllers/tmdbController'
import { autorizacao } from '../middlewares';

const routes = Router();

routes.post('/listar',autorizacao, Filme.listarFavorito);

routes.post('/salvar', autorizacao, Filme.salvarFavorito);

routes.post('/remover', autorizacao, Filme.removerFavorito);

routes.post('/checar', autorizacao, Filme.checarFavorito);

export default routes;

