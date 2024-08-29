import { Request,Response } from "express";
import AppDataSource from "../data-source";
import { Favorite } from "../entity/Favorite";
class Filmes{
    public async salvarFavorito(req:Request,res:Response):Promise<Response>{
        const {idfilme,title,imglink} = req.body;
        const {id} = res.locals;

        const nfav = new Favorite
            nfav.movieId = idfilme;
            nfav.user = id;
            nfav.title = title;
            nfav.imgLink = imglink;
        
        const fav = await AppDataSource.manager.save(nfav);

        if(fav){
            return res.json({"message":"favorito salvo"});
        }else{
            return res.json({"err":"erro ao salvar favorito"});
        }
    }
    public async listarFavorito(req:Request,res:Response): Promise<Response>{
        const {id} = res.locals
        const procurar = await AppDataSource.manager.find(Favorite, { where: {
            user: id
        }});
        if(procurar){
            return res.json(procurar);
        }
        return res.status(400).json({"err":"usuário não tem favorito"})
    }

}

export default new Filmes;