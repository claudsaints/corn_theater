import { Link, useNavigate } from "react-router-dom";
import user from "../../services/user";
import { useState } from "react";
import { Button, Container, Input, LoadingSpinner, Saling } from "../";
import { useLoadingButton } from "../../hooks/useLoading";

interface statusProps {
  mensagem: string;
  err: string;
}

export default function Pad() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState<statusProps | undefined>(undefined);
  const { loading, setLoading } = useLoadingButton();
  const navegate = useNavigate();

  return (
    <>
      <Container>
        <h1>Login</h1>

        <Input min={1} max={256} type="mail" place="Email" f={setMail} />
        <Input min={1} max={12} type="password" place="Senha" f={setPass} />

        <Button
          width="40%"
          onClick={async () => {
            setLoading(true);
            try {
              await user.login(mail, pass, navegate, setStatus);
            } finally {
              setLoading(false);
            }
          }}
        >
          <Saling w="100%" h="100%">
            {loading ? <LoadingSpinner /> : "Entrar"}
          </Saling>
        </Button>
        {status && status.err ? (
          <h3 className="spanBad">{status.err}</h3>
        ) : (
          <h3 className="spanGood">{status?.mensagem}</h3>
        )}
        <Link to="/Cadastro">Ainda não tem conta? Cadastro</Link>
      </Container>
    </>
  );
}
