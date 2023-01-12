import styled from "styled-components";

export const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  place-content: center;
  gap: 4%;
`;

export const Card = styled.div`
  width: 100%;
  height: 380px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 5%;
  }
  p {
    margin-top: 5%;
    text-align: center;
  }
  button {
    width: 40%;
    height: 8%;
    margin-top: 20px;
    cursor: pointer;
    background: #ffdc19;
    border: #ffdc19;
    color: #000000;

    :hover {
      background: #f5e8b3;
      border: #f5e8b3;
    }
  }
`;
