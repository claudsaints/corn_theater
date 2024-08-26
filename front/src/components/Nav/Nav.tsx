
import { useContext } from "react";
import styled from "styled-components";
import { ContextoHome } from "../../contexts/contextHome";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { Sbutton } from "../Btn/Sbutton.style";
import Logo from "../Logo/Logo";
import { ContextoSearch } from '../../contexts/contextSearch';



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
    const {setAlvo,alvo} = useContext(ContextoHome);
    const {qsetAlvo,qalvo} = useContext(ContextoSearch);

    const location = useLocation();

   
    const navigate = useNavigate();

    const isOnSearch = location.pathname.slice(0,7) === '/Search'

   




    return (
        <NavStyle>
            <Logo />
            <div className="forming">
            <button className="search">
                <img height='25px' width='25px' src="../search.png"/>
            </button>
            
            <input
                className="put"
                onChange={(e) => { 
                    isOnSearch ? qsetAlvo(e.target.value) : setAlvo(e.target.value);
                
                }}
                onKeyDown={(e) => {
                if (e.key == "Enter") {

                    isOnSearch ?  navigate(`/Search/${qalvo}`) :  navigate(`/Search/${alvo}`)
                    window.location.reload();
                   
                }
                }}
            />
            </div>
            <Sbutton >
            <Link to="/Profile">Perfil</Link>{" "}
            </Sbutton>
        </NavStyle>

    )
}
