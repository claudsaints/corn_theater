import { Router,Request,Response } from "express";
import userController from "./user"

const routes = Router();

routes.use("/usuario", userController);
routes.use((req:Request,res:Response)=> {
    res.status(404).json({"erro":"rota desconhecida"});
})

export default routes;