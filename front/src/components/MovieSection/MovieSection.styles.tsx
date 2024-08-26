import styled from "styled-components";


export const MovieSection = styled.div`
    color: white;
    display   : flex;
    border-radius : 1rem;
    gap: 4rem;
    margin: 2rem auto;
    height: 80%;
    padding: 3rem;
    width: 90%;
    background-color: black;

    align-items: flex-start;
    div{
        align-self:center;
    }
    p{
        text-align: justify;
        font-size: 1rem;
        line-height: 1.5;
        margin-top: 2rem;
    }
    h1{

        color:white;
        font-weight: bold;
        font-size: 2rem;
    }
    h2,h3{

        color:white;
        font-weight: bold;
        font-size: 1rem;
    }
    img{
        align-self: center;
        height:300px ;
        width: 300px ;
        margin-right: 15px;
        border: 8px solid black;
        box-shadow: 0 24px 32px -16px rgba(0,0,0,0.4);;

    }


`