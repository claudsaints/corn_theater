import AppDataSource from "../data-source" 
import { Request, Response } from 'express';
import { Users } from '../entity/User'
import * as bcrypt from 'bcrypt'
import { gerarTOken } from "../middlewares";


class UserController {
    public async create(req: Request, res: Response): Promise<Response>{
        const { name,mail,password } = req.body;
            const obj = new Users();
            obj.nome = name;
            obj.email = mail;
            obj.senha = bcrypt.hashSync(password, 8);
        const users = await AppDataSource.manager.save(obj);
        if(users){
            return res.json({"mensagem":"Usuário criado com sucesso"});

        }else{
            return res.status(400).json({"err":"User não foi cadastrado"});
        }
       
    }public async login(req:Request, res: Response): Promise<Response> {
        const {mail, password} = req.body;
        const validarmail = await AppDataSource.manager.findOneBy(Users,  {email : mail})


        if(validarmail){

            const check = bcrypt.compareSync(password, validarmail.senha)
            if(check){

                const token =  await gerarTOken({mail});
                return res.json(token)
            }else{

                return res.status(400).json({"err":"a senha ou email estão incorretos"})
            }

        }else{
            
            return res.status(404).json({"err":"Usuario não existe"})
        }

    }public async logout(req:Request,res:Response): Promise <Response> {

        return res.json({ token: null });

    }

    public async list(req: Request, res: Response): Promise<Response> {

        const users = await AppDataSource.manager.find(Users);
        return res.json(users);
        
    }
}

export default new UserController;
