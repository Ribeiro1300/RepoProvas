import styled from "styled-components";

export const Exams = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  top: 30px;
`;

export const Exam = styled.div`
  width: 30%;
  margin: 0px 10px 10px 10px;
  border-radius: 8px;
  background-color: blue;
  padding-top: 10px;

  p {
    margin: 10px;
  }
`;

export const Back = styled.p`
  position: fixed;
  left: 50%;
  bottom: 20%;
  align-self: center;
  font-size: 30px;
  cursor: pointer;
`;

export const SingleExam = styled.div`
  margin: 10px;
  position: relative;
  cursor: pointer;

  :hover {
    background-color: red;
  }

  p {
    margin: 10px;
  }
`;
