import styled from 'styled-components';


export const Scontainer = styled.div`
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