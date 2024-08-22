import { Request,Response,NextFunction } from "express";

const checarCadastro = (req:Request,res:Response,next:NextFunction) => {

    const {name, mail, password } = req.body

    if(!name && !mail  && !password){

        return res.json({"erro":"Você Não Forneceu os Dados nescessarios"})

    }else{


    }
}

const checarLogin = (req:Request,res:Response,next:NextFunction) => {
    
}