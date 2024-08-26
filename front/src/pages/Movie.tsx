import {  Link, useParams } from "react-router-dom"
import movie from '../services/movie'
import { useEffect, useState } from "react";
import { Sbutton } from "../components/Btn/Sbutton.style";
import { TmdbData } from "../types";

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
    
    const tmovie = movie.buscar_id;
    const {id} = useParams();

    const [dataMovie,setDatadataMovie] = useState <TmdbData> ();

    useEffect(() => {
        tmovie(id,setDatadataMovie)
    },[])

    if(!dataMovie){
        return(
            <h1>Carregando...</h1>
        )
    }
    console.log(dataMovie);
    return (
        <>
            <Sbutton><Link to='/Home'>Voltar</Link></Sbutton>
            <h1>{dataMovie.title}</h1>
            <h3>Titulo Original: {dataMovie.original_title}</h3>
            <p>Tempo de exibição: {dataMovie.runtime} minutos</p>
            <p>Data de lançamento: {dataMovie.release_date}</p>
            <img height='300px' width='300px' src={`https://image.tmdb.org/t/p/original${dataMovie.poster_path}`}/>
            <p>
                {dataMovie.overview}
            </p>

        </>
    )
}
