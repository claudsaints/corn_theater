import AppDataSource from "../data-source" 
import { Request, Response } from 'express';
import { User } from '../entity/User'

class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name,mail,password } = req.body;
        const obj = new User();
        obj.nome = name;
        obj.email = mail;
        obj.senha = password;
        const user = await AppDataSource.manager.save(obj);
        return res.json({"certo":user});
    }
    public async list(req: Request, res: Response): Promise<Response> {
        const users = await AppDataSource.manager.find(User);
        return res.json(users);
    }
}

export default new UserController;