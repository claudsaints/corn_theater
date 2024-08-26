import { useContext } from "react";
import { ContextoHome } from "../../contexts/contextHome";
import styled from "styled-components";
import { card } from "../../types";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fa5c5c;
    color: blue;
    text-align: center;
    height: 400px;
    width: 250px;
    margin: 10px;
    img{
        border-radius: 10px;
        height: 80%;
        width: 100%;
        box-shadow: 5px;
    }
    img:hover{
        
    }

`


export function Card(props:card){


    return(
        <StyledCard key={props.moviedata.id} >
            <Link to={`/Movie/${props.moviedata.id}`}>
            
                <img src={`https://image.tmdb.org/t/p/original${props.moviedata.poster_path}`} alt="img filme" 
                    
                />
            </Link>
            
        </StyledCard>
    )

}