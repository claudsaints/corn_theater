import { useContext } from "react";
import { Card, Footer, Nav, Sdiv } from "../components/index";
import { ContextoHome } from "../contexts/contextHome";

export default function Home() {
  const { data } = useContext(ContextoHome);
  return (
    <>
      <Nav />
      <Sdiv>
        {data.map((data) => (data.poster_path ? <Card moviedata={data} /> : null))}
      </Sdiv>
      <Footer>claudio</Footer>
    </>
  );
}
