import { Link } from "react-router-dom";
import { Sbutton } from "../components/Btn/Sbutton.style";
import { ContainerWelcome, Title, Descricao, FeaturesList, Feature } from "../components";



export default function Welcome() {
  return (
    <>
      <ContainerWelcome>
        <Title>Bem-vindo ao Corn Theater!</Title>
        <Descricao>
          Descubra novos filmes, adicione aos seus favoritos e compartilhe suas
          opiniões com a comunidade.
        </Descricao>
        <FeaturesList>
          <Feature>Explore informações detalhadas sobre filmes.</Feature>
          <Feature>
            Adicione filmes aos seus favoritos para acessá-los rapidamente.
          </Feature>
          <Feature>Comente e veja o que outros usuários estão dizendo.</Feature>
        </FeaturesList>
        <Sbutton>
          <Link to="/Login">Vamos Lá</Link>
        </Sbutton>
      </ContainerWelcome>
    </>
  );
}
