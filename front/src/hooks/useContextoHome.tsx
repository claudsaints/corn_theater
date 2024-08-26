import { useContext } from "react"
import { ContextoHome } from "../contexts/contextHome"

export const useContextoHome = () =>{
    const context = useContext(ContextoHome);
    if(!context){
        throw new Error(' contexto deve ser usado dentro do provider')
        return context;
    }
}