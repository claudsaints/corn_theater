import { Link } from "react-router-dom";
import Input from "../Inputs/Inputs";
import user from "../../services/user";
import { useState } from "react";
import { Sbutton } from "../Btn/Sbutton.style";
import { Scontainer } from "../Container/Scontainer.style";



export default function Cadpad(){
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [status, setStatus] = useState();
    
    return(
        <>
            <Scontainer>
                <h1>Cadastro</h1>
             
                <Input  place="Nome" f={setName}/>
                <Input  place="Email" f={setMail}/>
                <Input  place="Senha" f={setPass}/>

                <Sbutton onClick={() => {
                    user.create(name,mail,pass,setStatus);
                }}>
                    Enviar

                </Sbutton>
   

                <h3>{status}</h3>

                <Link to="/Login"><span> Retornar ao Login </span></Link>
                
            </Scontainer>
        </>
    )
}