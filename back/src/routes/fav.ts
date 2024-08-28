import {Router} from 'express'

import Filme from '../controllers/tmdbController'

const routes = Router();

routes.get('/', Filme.listarFavorito);

routes.post('/', Filme.salvarFavorito);

export default routes;

