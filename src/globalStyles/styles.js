import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #171717;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 70%;
  height: 80vh;
  background-color: #666666;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Option = styled.div`
  width: 30%;
  height: 8em;
  background-color: black;
  margin: 10px;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
