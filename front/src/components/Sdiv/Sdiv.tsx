import styled from "styled-components";

export const Sdiv = styled.div`
  margin: auto;
  margin-top: 100px; /* Ajuste o espaço para compensar o nav fixo */
  margin-bottom: 30px;
  width: 90%;
  display: grid;
  flex: auto;
  grid-template-columns: repeat(5, minmax(200px, 0.5fr));
  gap: 20px; /* Adiciona espaçamento entre os elementos */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(150px, 0.5fr)); /* Ajuste para tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(120px, 1fr)); /* Ajuste para dispositivos médios */
    margin-top: 80px; /* Ajuste o espaço superior */
  }

  @media (max-width: 574px) {
    padding: 2px;
    grid-template-columns: repeat(2, minmax(100px, 1fr)); /* Ajuste para dispositivos pequenos */
    margin-top: 90px; /* Ajuste o espaço superior */
  }

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr)); /* Para telas muito pequenas */
    margin-top: 90px; /* Ajuste o espaço superior */

  }
`