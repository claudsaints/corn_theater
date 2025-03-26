import styled from 'styled-components'

interface Btnprops{
    height?: string;
    width?: string;
    bgcolor?: string;
    hcolor?: string;
}

export const Button = styled.button<Btnprops>`
    height: ${({height}) => height ? height : 'auto'};
    width: ${({width}) => width ? width : 'auto'};
    font-weight: bold;
    background-color: ${({bgcolor}) => bgcolor ? bgcolor : 'rgb(0, 128, 255)'};
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
        color: ${({hcolor}) => hcolor ? hcolor :'#fff'};
        text-decoration: none;
    }

`