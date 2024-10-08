import styled from 'styled-components'

interface Btnprops{
    height?: string;
    width?: string;
}

export const Sbutton = styled.button<Btnprops>`
    height: ${({height}) => height ? height : 'auto'};
    width: ${({width}) => width ? width : 'auto'};
    font-weight: bold;
    background-image: linear-gradient(to right, rgb(0, 128, 255) 0%, rgb(100, 177, 255) 51%, rgb(0, 128, 255) 100%);
    margin: 20px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #000000;            
    box-shadow: 0 0 2px #1a161681;
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