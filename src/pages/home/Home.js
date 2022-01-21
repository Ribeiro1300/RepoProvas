import React from "react";
import { useNavigate } from "react-router-dom";
import * as G from "../../globalStyles/styles.js";

export default function Home() {
  const navigate = useNavigate();
  return (
    <G.Body>
      <G.Content>
        <G.Option onClick={() => navigate("/newExam")}>
          Adicionar nova prova
        </G.Option>
        <G.Option onClick={() => navigate("/search")}>
          Procurar por uma prova
        </G.Option>
      </G.Content>
    </G.Body>
  );
}
