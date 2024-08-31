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
  border-radius: 10px;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  height: 400px;
  width: 230px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 600px) {
    margin: 5px;
    height: 250px;
    width: 150px;
    padding: 5px;
  }

  div {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
  }

  img {
    border-radius: 10px;
    height: 80%;
    width: 90%;
    transition: transform 0.3s ease, opacity 0.3s ease, border 0.3s ease;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
    border: 2px solid transparent;
  }

  &:hover img {
    transform: scale(1.05);
    opacity: 1;
    border: 2px solid #007bff;
  }

  @media (max-width: 600px) {
    img {
      height: 70%;
      width: 80%;
    }

    div {
      font-size: 0.9rem;
    }
  }
`   




export function Card(props:card){


    return(
        <StyledCard key={props.moviedata.id ? props.moviedata.id : props.moviedata.movieId} >
            <Link to={`/Movie/${props.moviedata.id ? props.moviedata.id : props.moviedata.movieId}`}>
            
                <img src={`https://image.tmdb.org/t/p/original${props.moviedata.poster_path}`} alt="img filme" 
                    
                />
                <div>
                    {props.moviedata.title}
                </div>
            </Link>
            
        </StyledCard>
    )

}