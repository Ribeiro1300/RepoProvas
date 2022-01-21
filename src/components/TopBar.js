import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <Top>
      <h1 onClick={() => navigate("/")}>RepoProvas</h1>
    </Top>
  );
}

const Top = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  background-color: black;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 3em;
  z-index: 1;

  h1 {
    cursor: pointer;
  }
`;
