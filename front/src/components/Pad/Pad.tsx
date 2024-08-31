import { Link, useNavigate } from "react-router-dom";
import user from "../../services/user";
import Input from "../Inputs/Inputs";
import { useState } from "react";
import { Sbutton } from "../Btn/Sbutton.style";
import { Scontainer } from "../Container/Scontainer.style";
interface statusProps{
  mensagem:string;
  err:string;
}

export default function Pad() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState(""); 
  const [status, setStatus] = useState<statusProps | undefined>(undefined);
  const navegate = useNavigate();

  return (
    <>
      <Scontainer>
        <h1>Login</h1>

        <Input min={1} max={256} type="mail" place="Email" f={setMail} />
        <Input min={1} max={12} type="password" place="Senha" f={setPass} />

        <Sbutton
          onClick={() => {
            user.login(mail, pass, navegate, setStatus);
          }}
        >
          Enviar
        </Sbutton>
        {
          status  && status.err ? <h3 className="spanBad">{status.err}</h3>: <h3 className="spanGood">{status?.mensagem}</h3>

        }
        <Link to="/Cadastro">
          <span>Cadastro</span>
        </Link>
      </Scontainer>
    </>
  );
}
