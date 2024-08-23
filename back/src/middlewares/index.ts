import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

//function que gera o tonken 
export const gerarTOken = async (entrada: any) => {
    return jwt.sign(entrada, process.env.JWT_SECRET as string);
}

export const autorizacao = (req: Request, res: Response, next: NextFunction) => {
    const authorization: any = req.headers.authorization;
    try {
        // autorização no formato Bearer token
        const [, token] = authorization.split(" ");
        // valida o token
        const decoded = <any>jwt.verify(token, process.env.JWT_SECRET as string);
        if (!decoded) {
            res.status(401).json({ error: "Não autorizado" });
        }
        else {
            // passa os dados pelo res.locals para o próximo nível da middleware
            res.locals = decoded;
        }
    } catch (error) {
        // o token não é válido, a resposta com HTTP Method 401 (unauthorized)
        return res.status(401).send({ error: "Não autorizado" });
    }
    return next(); //chama a próxima função

}