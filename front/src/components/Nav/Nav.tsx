import {FaSearch} from 'react-icons/fa'
import { useContext } from "react";
import styled from "styled-components";
import { ContextoHome } from "../../contexts/contextHome";
import { Link } from "react-router-dom";
import { Sbutton } from "../Btn/Sbutton.style";
import Logo from "../Logo/Logo";


export const NavStyle = styled.div`
    background-color: rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 128, 255);
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    

`
export function Nav(){
    const {setAlvo,data} = useContext(ContextoHome);

    

    return (
        <NavStyle>
            <Logo />
            <div className="forming">
            <button className="search">
                <FaSearch />
            </button>
            
            <input
                className="put"
                onChange={(e) => {
                setAlvo(e.target.value);
                }}
                onKeyDown={(e) => {
                if (e.key == "Enter") {
                    console.log(data)
                }
                }}
            />
            </div>
            <Sbutton>
            <Link to="/Profile">Perfil</Link>{" "}
            </Sbutton>
        </NavStyle>

    )
}
