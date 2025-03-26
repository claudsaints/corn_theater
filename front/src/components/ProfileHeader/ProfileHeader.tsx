import { Button } from "../Btn/Button.style";
import { RiLogoutBoxLine } from "react-icons/ri";
import Usuario from '../../services/user'
;

export default function ProfileHeader(){
    const logout = Usuario.logout
    return(
        <>
            <RiLogoutBoxLine cursor={"pointer"} color="#ffffff" size={40} onClick={logout}/>
            
            <Button onClick={() => window.location.href = "/home"}>Voltar</Button>
        
        </>

     
    );

}