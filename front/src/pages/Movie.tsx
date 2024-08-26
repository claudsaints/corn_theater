import {  Link, useParams } from "react-router-dom"
import Loading from "../components/Loading/Loading";
import movie from '../services/movie'
import { useEffect, useState } from "react";
import { Sbutton } from "../components/Btn/Sbutton.style";
import { TmdbData } from "../types";
import { MovieSection } from "../components/MovieSection/MovieSection.styles";

/*adult
: 
false
backdrop_path
: 
null
belongs_to_collection
: 
null
budget
: 
0
genres
: 
(2) [{…}, {…}]
homepage
: 

id
: 

imdb_id
: 

origin_country
: 
original_language
: 

original_title
: 

overview
: 
""
popularity
: 
2.768
poster_path
: 
"/1hgr9LwwnRB9zyqVJyqjAQ54cgA.jpg"
production_companies
: 
(2) [{…}, {…}]
production_countries
: 
[{…}]
release_date
: 
"1977-03-04"
revenue
: 
0
runtime
: 
102
spoken_languages
: 
[{…}]
status
: 
"Released"
tagline
: 
""
title
: 
"Terror"
video
: 
false
vote_average
: 
6.9
vote_count
: 
4 */

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

            <Sbutton><Link to='/Home'>Voltar</Link></Sbutton>
            <MovieSection>
                <div>
                    
                </div>
                <img src={`https://image.tmdb.org/t/p/original${dataMovie.poster_path}`}/>
                <div>
                    <div>
                        <h1>{dataMovie.title}</h1> 
                        <h3>Titulo Original: {dataMovie.original_title}</h3>
                        <p>Tempo de exibição: {dataMovie.runtime} minutos</p>
                        <p>Data de lançamento: {dataMovie.release_date}</p>
                    </div>
                    <div>
                        <h1>Overview</h1>
                        <p>
                            {dataMovie.overview}
                        </p>
                    </div>
                </div>
            </MovieSection>

        </>
    )
}
