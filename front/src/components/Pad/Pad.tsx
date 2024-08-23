import { Link,  useNavigate } from "react-router-dom";
import user from "../../services/user";
import Input from "../Inputs/Inputs";
import './pad.css'
import { useState } from "react";


export default function Pad(){
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [status,setStatus] = useState("");
    const navegate = useNavigate();

    return(
        <>
            <div className="container">
                <h1>Login</h1>
                
                <Input class="formput" place="Email" f={setMail}/>
                <Input class="formput" place="Senha" f={setPass}/> 

                <button className="btn_form" onClick={() => {
                    user.login(mail , pass, navegate, setStatus);
                }}>Enviar</button>
                <p>{status}</p>

                <Link to="/Cadastro"><span>Cadastro</span></Link>
            </div>
        </>
    )
}