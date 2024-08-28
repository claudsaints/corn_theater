import Loading from "../components/Loading/Loading";
import { createContext, useEffect, useState } from "react";
import { ContextoProps } from "../types";
import movie from "../services/movie";


export const ContextoHome = createContext({} as ContextoProps);



export function HomeItens({children}:any){
    const [alvo,setAlvo]= useState("")
    const [data,setData] = useState ([]);
    const [loading,setLoading] = useState(true);

    //chama os filmes mais populares na home page
    const tmovies = movie.top_movie;

    useEffect(() => {
        tmovies(setData);
        setTimeout(() => {
            setLoading(false);
        },1000)
    },[]);
    
    if(loading){
        return  (
            <Loading/>
        )
    }

    return(
        <ContextoHome.Provider value={{alvo,data,setAlvo,setData}}>
           {children}     
        </ContextoHome.Provider>
    )
}