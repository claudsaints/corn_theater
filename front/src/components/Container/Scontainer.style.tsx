import styled from 'styled-components';


const Scontainer = styled.div`
     display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    height: 70%;
    padding: 20px;
    width: 40%;
    background-color: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        width: 80%;
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 10px;
    }


`

const ContainerWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Descricao = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;


const FeaturesList = styled.ul`
  margin: 40px 0;
  text-align: left;
  list-style: none;
`;

const Feature = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
  display: flex;
  align-items: center;

  &::before {
    content: "✓";
    color: #001aff;
    margin-right: 10px;
  }
`;

export{Scontainer,
    ContainerWelcome,
    Descricao,Feature,FeaturesList,Title
}