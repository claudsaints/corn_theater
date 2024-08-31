import { Link } from "react-router-dom";
import Input from "../Inputs/Inputs";
import user from "../../services/user";
import { useState } from "react";
import { Sbutton } from "../Btn/Sbutton.style";
import { Scontainer } from "../Container/Scontainer.style";

interface statusProps{
    mensagem:string;
    err:string;
}



export default function Cadpad(){
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [status, setStatus] = useState<statusProps | undefined>(undefined);
    return(
        <>
            <Scontainer>
                <h1>Cadastro</h1>
             
                <Input min={2} max={150} type="text" place="Nome" f={setName}/>
                <Input min={1} max={256} type="mail" place="Email" f={setMail}/>
                <Input min={6} max={12} type="password" place="Senha" f={setPass}/>

                <Sbutton onClick={() => {
                    user.create(name,mail,pass,setStatus);
                }}>
                    Enviar

                </Sbutton>
                {
                    status  && status.err ? <h3 className="spanBad">{status.err}</h3>: <h3 className="spanGood">{status?.mensagem}</h3>

                }

                

                <Link to="/Login"><span> Retornar ao Login </span></Link>
                
            </Scontainer>
        </>
    )
}
