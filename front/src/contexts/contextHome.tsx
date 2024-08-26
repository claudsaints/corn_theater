import Loading from "../components/Loading/Loading";
import { createContext, useEffect, useState } from "react";
import { ContextoProps } from "../types";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { Sdiv } from "../components/Sdiv/Sdiv";
import { Card} from "../components/Card/Card";
import movie from "../services/movie";


export const ContextoHome = createContext({} as ContextoProps);



export function HomeItens(){
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
            <Nav/>  
                <Sdiv >
                    {
                        data.map((obj) => obj.poster_path ? (<Card moviedata={obj}  /> ): null)
                    }               
                    
                </Sdiv>
            <Footer>
                claudio
            </Footer>
            
      
        </ContextoHome.Provider>
    )
}