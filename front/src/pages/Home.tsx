import { useContext } from "react";
import { Card, Footer, Nav, Saling, Sdiv,IconGithub,IconLinkedin } from "../components/index";
import { ContextoHome } from "../contexts/contextHome";
import { Link } from "react-router-dom";

export default function Home() {
  const isauth = localStorage.getItem("token")
  if(!isauth){
    return (
      <Saling>
        <h1>Usuário Não Autenticado</h1>
        <span >
          <Link className="spanBad" to="/Login" >Realize o Login para acessar clicando aqui</Link>
        </span>
      </Saling>

    )
  }
  const { data } = useContext(ContextoHome);
  return (
    <>
      <Nav />
      <Sdiv>
        {data.map((data) => (data.poster_path ? <Card moviedata={data} /> : null))}
      </Sdiv>
      <Footer>
        
        <Link to="https://github.com/claudsaints">
          <IconGithub/>
        </Link>
        <Link to="https://br.linkedin.com/in/claudio-d-5b78b9260">
          <IconLinkedin/>
        </Link>
        @claudsaints
      </Footer>
    </>
  );
}
