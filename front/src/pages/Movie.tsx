import {  Link, useParams } from "react-router-dom"
import Loading from "../components/Loading/Loading";
import movie from '../services/movie'
import { useEffect, useState } from "react";
import { Sbutton } from "../components/Btn/Sbutton.style";
import { TmdbData } from "../types";
import { MovieSection } from "../components/MovieSection/MovieSection.styles";
import Comments from "../components/CommentsSection/Comments";

export default function dataMovie () {
    //parametro url
    const {id} = useParams();


    const tmovie = movie.buscar_id;

    const [dataMovie,setDatadataMovie] = useState <TmdbData> ();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        tmovie(id,setDatadataMovie);
        setTimeout(() => {
            setLoading(false);
        },1000);
    },[])

    if(loading){
        return  (
            <Loading/>
        )
    }
    console.log(dataMovie);
    return (
        <>


            <MovieSection>
            <Sbutton><Link to='/Home'>Voltar</Link></Sbutton>
                <div>
                    
                </div>
                <img src={`https://image.tmdb.org/t/p/original${dataMovie?.poster_path}`}/>
                <div>
                    <div>
                        <h1>{dataMovie?.title}</h1> 
                        <h3>Titulo Original: {dataMovie?.original_title}</h3>
                        <p>Tempo de exibição: {dataMovie?.runtime} minutos</p>
                        <p>Data de lançamento: {dataMovie?.release_date}</p>
                    </div>
                    <div>
                        <h1>Overview</h1>
                        <p>
                            {dataMovie?.overview}
                        </p>
                    </div>
                </div>
            </MovieSection>

            <Comments movieId="id" />

        </>
    )
}
