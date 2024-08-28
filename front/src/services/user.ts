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
        console.log(mail)
        await api.post("/usuario/login", {mail, password})
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token' , res.data.token);
            return fun('/Home')

        }).catch((err) => {
            return fun2(err.response.data.err);
        });
          
        

    }
}
