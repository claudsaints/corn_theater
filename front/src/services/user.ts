import { api } from "./api";


export default new class Usuario{
    
    async create(name:string, mail: string,password: string, fun:CallableFunction){        
        await api.post("/usuario/cadastro", { name, mail, password })
        .then((res) => {
            return fun(res.data.mensagem);

        }).catch((err) => {
            return console.log(err);
        });
          
        
    }
    async login( mail:string, password: string, fun:CallableFunction, fun2:CallableFunction){
        await api.post("/usuario/login", {mail, password})
        .then((res) => {
            localStorage.setItem('token' , res.data);
            return fun('/Home')

        }).catch((err) => {
            return fun2(err.response.data.err);
        });
          
        

    }
}
