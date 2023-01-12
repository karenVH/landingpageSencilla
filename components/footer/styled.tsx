import styled from "styled-components";

export const ContainerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 500px 500px;
  place-content: center;
  gap: 15px;

  .icon {
  }
`;

export const Content = styled.div`

`;

export const ContText = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 400px;
    line-height: 1.5;
  }
`;
