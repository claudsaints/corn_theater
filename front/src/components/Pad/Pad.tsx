import { Link, useNavigate } from "react-router-dom";
import user from "../../services/user";
import Input from "../Inputs/Inputs";
import { useState } from "react";
import { Sbutton } from "../Btn/Sbutton.style";
import { Scontainer } from "../Container/Scontainer.style";

export default function Pad() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState("");
  const navegate = useNavigate();

  return (
    <>
      <Scontainer>
        <h1>Login</h1>

        <Input  place="Email" f={setMail} />
        <Input  place="Senha" f={setPass} />

        <Sbutton
          onClick={() => {
            user.login(mail, pass, navegate, setStatus);
          }}
        >
          Enviar
        </Sbutton>

        <p>{status}</p>

        <Link to="/Cadastro">
          <span>Cadastro</span>
        </Link>
      </Scontainer>
    </>
  );
}
