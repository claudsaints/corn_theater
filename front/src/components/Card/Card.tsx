import { useContext } from "react";
import { ContextoHome } from "../../contexts/contextHome";
import styled from "styled-components";
import { card } from "../../types";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    //align-items: center;
    background-color: #000000;
    color: blue;
    text-align: center;
    height: 400px;
    width: 230px;
    margin: 10px;
    @media (max-width: 600px){
        
        margin:2px;
        height: 200px;
        width: 100px;
    }
    div{
        margin-top: 10px;
    }
    img{
        align-self:center;
        opacity: 0.4;
        border: transparent;
        border-radius: 10px;
        height: 80%;
        width: 90%;
        box-shadow: 5px;
    }
    img:hover{
        opacity: 1;
    }
`   




export function Card(props:card){


    return(
        <StyledCard key={props.moviedata.id} >
            <Link to={`/Movie/${props.moviedata.id}`}>
            
                <img src={`https://image.tmdb.org/t/p/original${props.moviedata.poster_path}`} alt="img filme" 
                    
                />
                <div>
                    {props.moviedata.title}
                </div>
            </Link>
            
        </StyledCard>
    )

}