import { createContext, useEffect, useState } from "react";
import { ContextoProps } from "../types";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { Sdiv } from "../components/Sdiv/Sdiv";
import { Card} from "../components/Card/Card";
import movie from "../services/movie";
import { TmdbData } from "../types";


export const ContextoHome = createContext({} as ContextoProps);



export function HomeItens(){
    const [alvo,setAlvo]= useState("")
    const [data,setData] = useState ([]);


    const tmovies = movie.buscar;

    useEffect(() => {
        tmovies("terror",setData);
                
        
    },[])
    
    if(!data){
        return(
            <h1>Carregando...</h1>
        )
    }

    return(
        <ContextoHome.Provider value={{alvo,data,setAlvo,setData}}>
            <Nav/>  
                <Sdiv>
                    {
                        data.map((obj) => obj.poster_path ? (<Card moviedata={obj}  /> ): null)
                    }                  
                    
                </Sdiv>
            <Footer/>
            <Footer/>
      
        </ContextoHome.Provider>
    )
}