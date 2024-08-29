import { userInt } from "./api"


export default new class Interaction{
    async saveFavorite(idfilme:number,title:string,imglink:string){
        userInt.post("/filmes/salvar", {idfilme,title,imglink})
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)

        });
    }
    async removeFavorite(){

    }
    async getFavorite(){
        userInt.post("/filmes/listar")
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)

        });
    }
    async saveComment(movieid:number,content:string){
        console.log("dados: ",movieid,content)
        
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
            console.log(res)
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