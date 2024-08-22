import AppDataSource from "../data-source" 
import { Request, Response } from 'express';
import { User } from '../entity/User'
import * as bcrypt from 'bcrypt'
import { gerarTOken } from "../middlewares";


class UserController {
    public async create(req: Request, res: Response): Promise<Response>{
        const { name,mail,password } = req.body;
            const obj = new User();
            obj.nome = name;
            obj.email = mail;
            obj.senha = bcrypt.hashSync(password, 8);
        const user = await AppDataSource.manager.save(obj);
        if(user){
            return res.json({"mensagem":"Usuário criado com sucesso"});

        }else{
            return res.json({"erro":"User não foi cadastrado"});
        }
       
    }public async login(req:Request, res: Response): Promise<Response> {
        const {mail, password} = req.body;
        const validarmail = await AppDataSource.manager.findOneBy(User,  {email : mail})
        if(validarmail){
            if(bcrypt.compareSync(password, validarmail.senha)){
                return res.json(gerarTOken(mail));
            }else{
                return res.json({"error":"a senha ou email estão incorretos"})
            }
        }else{
            return res.json({"erro":"Usuario não existe"})
        }
    }

    public async list(req: Request, res: Response): Promise<Response> {

        const users = await AppDataSource.manager.find(User);
        return res.json(users);
    }
}

export default new UserController;

/*
public async list(req: Request, res: Response): Promise<Response> {
    const users = await AppDataSource.manager.find(User);
    return res.json(users);
}*/