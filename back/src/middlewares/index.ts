import {Request, Response,NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

//function que gera o tonken 
export const gerarTOken = async (entrada:any) => {
    jwt.sign(entrada, process.env.JWT_SECRET as string);
}

export const autorizacao = (req:Request,res:Response,next:NextFunction) => {

    

}