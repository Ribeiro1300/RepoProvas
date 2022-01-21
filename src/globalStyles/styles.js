import styled from "styled-components";
import HomeImg from "../assets/homework-g63a8cdc98_1920.jpg";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HomeImg});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 70%;
  min-height: 70vh;
  background-color: rgba(102, 102, 102, 0.8);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 40%;
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
