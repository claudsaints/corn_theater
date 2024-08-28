
import { useContext } from "react";
import styled from "styled-components";
import { ContextoHome } from "../../contexts/contextHome";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { Sbutton } from "../Btn/Sbutton.style";
import Logo from "../Logo/Logo";
import { ContextoSearch } from '../../contexts/contextSearch';



export const NavStyle = styled.div`
  background-color: #1a1a1a;
  border-bottom: 2px solid rgb(0, 128, 255);
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;


nav:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

nav a {
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: rgb(0, 128, 255);
}

@media (max-width: 768px) {
  nav {
    justify-content: space-between;
    padding: 0 20px;
  }

  nav a {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  nav {
    flex-direction: column;
    height: auto;
    padding: 15px 0;
  }

  nav a {
    padding: 10px 0;
    font-size: 12px;
  }
}

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
                <button className="search">
                    <img  src="../search.png"/>
                </button>
            
            </div>
            <Sbutton >
            <Link to="/Profile">Perfil</Link>{" "}
            </Sbutton>
        </NavStyle>

    )
}
