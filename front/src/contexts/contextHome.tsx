import Loading from "../components/Loading/Loading";
import { createContext, useEffect, useState } from "react";
import { ContextoProps, TmdbDefault } from "../types";



export const ContextoHome = createContext({} as ContextoProps);



export function HomeItens({children}:any){
    const [page,setPage] = useState<number>(1)
    const [alvo,setAlvo]= useState("")
    const [data,setData] = useState<TmdbDefault | undefined>();
    const [loading,setLoading] = useState(true);


    useEffect( () => {
        setTimeout(() => {
            setLoading(false);
        },50)
    },[]);
    
    if(loading){
        return  (
            <Loading/>
        )
    }

    return(
        <ContextoHome.Provider value={{alvo,data,setAlvo,setData,loading,setLoading,page,setPage}}>
           {children}     
        </ContextoHome.Provider>
    )
}