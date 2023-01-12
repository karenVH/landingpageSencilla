import styled from "styled-components";

export const ContentTrans = styled.div`
  color: #fff;
  width: 1000px;
  height: 550px;
  background: #3f067585;
  position: absolute;
  top: 0;
  transform: translatex(212px) translatey(0px);
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const Text = styled.div`
  padding: 15%;
  width: 600px;
  text-align: left;

  p{
    
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 100%;
  background: #3f0675;
  padding: 20px;
  padding-top: 30%;
  form {
    display: grid;
    grid-template-columns: auto;
    gap: 2%;

    input {
      background: #3f0675;
      border: 1px solid #ffdc19;
      height: 40px;
      color: #ffdc19;
      padding: 2%;
    }

    button {
      background: #ffdc19;
      border: 1px solid #ffdc19;
      height: 40px;
      color: #3f0675;
      text-transform: uppercase;
    }
  }
`;
