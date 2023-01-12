import styled from "styled-components";

export const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  place-content: center;
  gap: 15px;
`;

export const ContText = styled.div`
  width: 100%;
  text-align: left;
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
`;
