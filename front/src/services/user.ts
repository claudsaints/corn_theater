import { api } from "./api";

export default new class Usuario{
    
    async create(name:string, mail: string,password: string, fun:CallableFunction){        
        if(!name || name.length == 0){
            return fun({err:"Forneça o nome"});
    
        }else if(!mail || mail.length == 0){
            return fun( {err:"Forneça o email"});
    
        }else if(!password || password.length < 6){
            return fun( {err:"A senha deve ser maior que 6 caracteres"});
        }
        
        await api.post("/usuario/cadastro", { name, mail, password })
        .then((res) => {
            return fun(res.data);

        }).catch((err) => {
            return fun(err.response.data);
        });

    
          
        
    }
    async login( mail:string, password: string, fun:CallableFunction, fun2:CallableFunction){
        console.log("chegou aqui")
        if(!mail || mail.length == 0){
            return fun2( {err:"Forneça o email"});
    
        }else if(!password || password.length < 6){
            return fun2( {err:"A senha deve ser maior que 6 caracteres"});
        }
        await api.post("/usuario/login", {mail, password})
        .then((res) => {
            localStorage.setItem('token' , res.data);
            return fun('/Home')

        }).catch((err) => {
            return fun2(err.response.data);
        });
    }async logout(){
        localStorage.clear();
        window.location.replace('/login')

    }
}
