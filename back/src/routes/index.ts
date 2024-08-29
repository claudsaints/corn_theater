import { Router,Request,Response } from "express";
import Comment from './comment'
import userController from "./user"
import Filme from './fav'


const routes = Router();

routes.use("/usuario", userController);

routes.use("/filmes", Filme);

routes.use("/comment", Comment);

routes.use((req:Request,res:Response)=> {
    res.status(404).json({"erro":"rota desconhecida"});
})

export default routes;