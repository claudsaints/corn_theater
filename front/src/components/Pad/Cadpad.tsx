import { Link } from "react-router-dom";
import Input from "../Inputs/Inputs";
import './pad.css'
import user from "../../services/user";
import { useState } from "react";



export default function Cadpad(){
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [status, setStatus] = useState();
    
    return(
        <>
            <div className="container">
                <h1>Cadastro</h1>
             
                <Input class="formput" place="Nome" f={setName}/>
                <Input class="formput" place="Email" f={setMail}/>
                <Input class="formput" place="Senha" f={setPass}/>

                <button onClick={() => {
                    user.create(name,mail,pass,setStatus);
                }} className="btn_form">Enviar</button>

                <h3>{status}</h3>

                <Link to="/Login"><span> Retornar ao Login </span></Link>
                
            </div>
        </>
    )
}