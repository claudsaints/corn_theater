import styled from "styled-components";

export const Sdiv = styled.div`
  margin:  auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 90%;
  display: grid;
  flex: auto;
  grid-template-columns: repeat(5,minmax(200px,0.5fr));
  
  @media (max-width: 574px){
    padding: 2px;
    grid-template-columns: repeat(3,minmax(80px,0.5fr));      
  }
`