import { userInt } from "./api"


export default new class Interaction{
    async saveFavorite(idfilme:number | any,title:string | undefined,imglink:string | undefined){
        idfilme = parseInt(idfilme)
        await userInt.post("/filmes/salvar", {idfilme,title,imglink})
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)

        });
    }
    async removeFavorite(idfilme:number | any){
        idfilme = parseInt(idfilme)
        await userInt.post("/filmes/remover", {"movieid":idfilme})
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{ 
            console.log(err)
        })

    }async checkFavorite(idfilme:number | any, fun:CallableFunction){
        idfilme = parseInt(idfilme)
        await userInt.post("/filmes/checar", {"movieid":idfilme})
        .then((res) => {
            console.log(res.data.message)
            fun(res.data.message)
        })
        .catch((err) =>{ 
            console.log(err)
        })


    }
    async getAllFavorite(fun:CallableFunction){
        await userInt.post("/filmes/listar")
        .then((res) => {
            fun(res.data)
        })
        .catch((err) =>{
            console.log(err)

        });
    }
    async saveComment(movieid:number,content:string){
        
        await userInt.post("/comment/criar", {movieid,content})
        .then((res) => {
           return console.log(res.data)
        })
        .catch((err) =>{
            return console.log("err", err)

        });
    }
    async getComments(fun:CallableFunction, movieid:number){
        await userInt.post("/comment/buscar",{movieid})
        .then((res) => {
            if(res.data.search){
                return fun(res.data.search);
            }
            return fun(res.data);
            
        })
        .catch((err) =>{
            console.log(err)

        });
    }

}