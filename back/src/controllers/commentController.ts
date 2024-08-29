import {Request,Response} from 'express'
import { Comments } from '../entity/Comment';
import AppDataSource from '../data-source';


class Comment{

    public async saveComment(req:Request,res:Response): Promise<Response>{
        const {movieid,content} = req.body;
        const {id} = res.locals;

        const nComment = new Comments
            nComment.user = id;
            nComment.movie = movieid;
            nComment.content = content;
        try{
            const save = await AppDataSource.manager.save(nComment);
            return res.json({"message":"comentario salvo com sucesso"});
        }catch{
            return res.status(400).json({"err":"comentário não foi salvo"})
        }
    }
    public async searchCommnet(req:Request,res:Response): Promise<Response>{
        const {movieid} = req.body;

        const commentRepos = AppDataSource.getRepository(Comments)

        try{
            const search = await commentRepos.createQueryBuilder("comment")
            .innerJoinAndSelect('comment.user','user')
            .select(['comment.id','comment.content','user.nome'])
            .where(`comment.movie=${movieid}`).getMany();

            if(search.length === 0) {
                return res.json({"message":"Ainda sem comentários"})
            }

            return res.json({search})
        }catch{
            return res.status(404).json({"err":"erro ao enviar comentário"})
        }
    }
}



export default new Comment;