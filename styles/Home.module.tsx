import styled from "styled-components";

export const Container = styled.div`
  font-family: "Gotham";
  max-width: 100%;
  display: grid;
  justify-content: center;
`;

export const ContentGrid = styled.div`
  width: 1440px;
  display: grid;
  place-items: center;
  grid-template-columns: auto;

  .line{
    width: 150px;
    height: 6px;
    background: #ffdc19;
    border: 1px solid #ffdc19;
    border-radius: 10px 0 10px 0;
  }
`;

export const Bannercss = styled.div`
  width: 100%;
  height: 550px;
  display: grid;
  place-content: center;
`;

export const Info = styled.div`
  width: 100%;
  height: 170px;
  background: #ebe9ea;
  display: grid;
  place-content: center;
`;

export const Frase = styled.div`
  width: 100%;
  height: 180px;
  display: grid;
  place-content: center;
`;

export const Serv = styled.div`
  width: 100%;
  height: 400px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 500px;
  background: #ebe9ea;
`;
