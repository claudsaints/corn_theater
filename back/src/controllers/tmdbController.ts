import { Request,Response } from "express";
import AppDataSource from "../data-source";
import { Favorite } from "../entity/Favorite";
class Filmes{
    public async salvarFavorito(req:Request,res:Response):Promise<Response>{
        const {idfilme,title,overview,imglink} = req.body;

        const nfav = new Favorite
            nfav.movieId = idfilme;
            nfav.title = title;
            nfav.overview = overview;
            nfav.imgLink = imglink;
        
        const fav = await AppDataSource.manager.save(nfav);

        if(fav){
            return res.json({"message":"favorito salvo"});
        }else{
            return res.json({"err":"erro ao salvar favorito"});
        }
    }

}

export default new Filmes;