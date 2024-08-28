import styled from "styled-components";


export const MovieSection = styled.div`
   color: white;
  display: flex;
  border-radius: 1rem;
  gap: 2rem;
  margin: 2rem auto;
  margin-top: 50px;
  height: auto;
  padding: 2rem;
  width: 90%;
  background-color: #1a1a1a;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-items: flex-start;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  div {
    align-self: center;
  }

  p {
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 1rem;
    transition: color 0.3s ease;
  }

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    transition: color 0.3s ease;
  }

  h2, h3 {
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  img {
    align-self: center;
    height: 300px;
    width: 300px;
    margin-right: 15px;
    border-radius: 10px;
    border: 5px solid #333;
    box-shadow: 0 24px 32px -16px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 30px 45px rgba(0, 0, 0, 0.6);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1.5rem;

    img {
      height: 250px;
      width: 250px;
    }

    p {
      font-size: 0.9rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2, h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;

    img {
      height: 200px;
      width: 200px;
    }

    p {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    h2, h3 {
      font-size: 0.8rem;
    }
  }

`