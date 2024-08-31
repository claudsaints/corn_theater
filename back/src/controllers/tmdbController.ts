import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Favorite } from "../entity/Favorite";
class Filmes {
    public async salvarFavorito(req: Request, res: Response): Promise<Response> {
        const { idfilme, title, imglink } = req.body;
        const { id } = res.locals;

        const nfav = new Favorite
            nfav.movieId = idfilme;
            nfav.user = id;
            nfav.title = title;
            nfav.poster_path = imglink;

        const fav = await AppDataSource.manager.save(nfav);

        if (fav) {
            return res.json({ "message": "favorito salvo" });
        } else {
            return res.json({ "err": "erro ao salvar favorito" });
        }
    }
    public async checarFavorito(req: Request, res: Response): Promise<Response> {
        const { movieid } = req.body;
        const { id } = res.locals;
        const favRepos = AppDataSource.getRepository(Favorite);
        try{
          
            const favorito = await favRepos.findOneOrFail({ where: { user: id, movieId: movieid } });
          
            return res.json({"message":true});
        }catch{
            return res.json({"message":false});
        }
    }
    public async listarFavorito(req: Request, res: Response): Promise<Response> {
        const { id } = res.locals
        const procurar = await AppDataSource.manager.find(Favorite, {
            where: {
                user: id
            }
        });
        if (procurar) {
            return res.json(procurar);
        }
        return res.status(400).json({ "err": "usuário não tem favorito" })
    } public async removerFavorito(req: Request, res: Response): Promise<Response> {
        const { movieid } = req.body;
        const { id } = res.locals;
        const favRepos = AppDataSource.getRepository(Favorite);
        const favorito = await favRepos.findOne({ where: { user: id, movieId: movieid } });
        if (favorito) {
            try {
                favRepos.remove(favorito);
                return res.json({ "message": "favorito removido" })
            } catch {
                return res.json({ "err": "não conseguimos remover" })

            }
        }
        return res.json({ "err": "não encontramos esse item" })
    }
}

export default new Filmes;