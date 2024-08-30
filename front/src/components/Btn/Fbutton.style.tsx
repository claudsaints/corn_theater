import styled from 'styled-components'

interface Btnprops{
    height?: string;
    width?: string;
}

export const Fbutton = styled.button<Btnprops>`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    height: ${({height}) => height ? height : 'auto'};
    width: ${({width}) => width ? width : 'auto'};
    background-image: linear-gradient(to right, rgb(255, 0, 157) 0%, rgb(255, 100, 185) 51%, rgb(255, 0, 157) 100%);
    margin: 20px;
    padding: 15px ;
    transition: 0.5s;
    background-size: 200% auto;
    color: #000000;            
    box-shadow: 0 0 2px #1a1616;
    border-radius: 10px;
    border: none;
    display: block;
    &:hover{
        cursor: pointer;
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;       
    }
   

`