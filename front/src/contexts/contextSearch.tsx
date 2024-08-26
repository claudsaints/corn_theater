import { createContext, useEffect, useState } from "react";
import { ContextoQueryProps } from "../types";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { Sdiv } from "../components/Sdiv/Sdiv";
import { Card} from "../components/Card/Card";
import movie from "../services/movie";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";



export const ContextoSearch = createContext({} as ContextoQueryProps);



export function SearchItens(){
    //states de busca e dados 
    const [qalvo,qsetAlvo]= useState("")
    const [qdata,qsetData] = useState <any | null | undefined>();
    const [loading,setLoading] = useState(true);

    const {query} = useParams();

    //caregamento da api 

    const tmovies = movie.buscar;
    useEffect(() => {
        tmovies(query,qsetData);
        setTimeout(() => {
            setLoading(false);
        },1000)        
        
    },[]);
    
    //definir loading booleano
    if(loading){
        return  (
            <Loading/>
        )
    }

    return(
        <ContextoSearch.Provider value={{qalvo,qdata,qsetAlvo,qsetData}}>
            <Nav/>  
                <h1>Resultado Da Busca: {query}</h1>
                <Sdiv>
                    {
                        qdata.map((obj:any) => obj.poster_path ? (<Card moviedata={obj}  /> ): null)
                    }               
                    
                </Sdiv>
            <Footer>
                claudio
            </Footer>
      
        </ContextoSearch.Provider>
    )
}