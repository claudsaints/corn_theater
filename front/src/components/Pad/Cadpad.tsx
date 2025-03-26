import { Link } from "react-router-dom";
import user from "../../services/user";
import { useState } from "react";
import { Button, Container, LoadingSpinner, Input, Saling } from "../";
import { useLoadingButton } from "../../hooks/useLoading";

interface statusProps {
  mensagem: string;
  err: string;
}

export default function Cadpad() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState<statusProps | undefined>(undefined);
  const { loading, setLoading } = useLoadingButton();
  return (
    <>
      <Container>
        <h1>Cadastro</h1>

        <Input min={2} max={150} type="text" place="Nome" f={setName} />
        <Input min={1} max={256} type="mail" place="Email" f={setMail} />
        <Input min={6} max={12} type="password" place="Senha" f={setPass} />

        <Button
          width="40%"
          onClick={async () => {
            setLoading(true);
            try {
              await user.create(name, mail, pass, setStatus);
            } finally {
              setLoading(false);
            }
          }}
        >
          <Saling h="100%" w="100%">{loading ? <LoadingSpinner /> : "Enviar"}</Saling>
        </Button>
        {status && status.err ? (
          <h3 className="spanBad">{status.err}</h3>
        ) : (
          <h3 className="spanGood">{status?.mensagem}</h3>
        )}

        <Link to="/Login"> Retornar ao Login </Link>
      </Container>
    </>
  );
}
