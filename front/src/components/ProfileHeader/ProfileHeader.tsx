import { Sbutton } from "../Btn/Sbutton.style";
import { Scontainer } from "../Container/Scontainer.style";
import Usuario from '../../services/user'
export default function ProfileHeader(){
    const logout = Usuario.logout
    return(
            <Scontainer>
                <Sbutton onClick={logout}>Logout</Sbutton>

            </Scontainer>
     
    )

}