import { Sbutton } from "../Btn/Sbutton.style";
import Usuario from '../../services/user'
import { Link } from "react-router-dom";

export default function ProfileHeader(){
    const logout = Usuario.logout
    return(
        <>
            <Sbutton onClick={logout}>Logout</Sbutton>
            <Sbutton><Link to="/Home">Voltar </Link></Sbutton>
        
        </>

     
    );

}