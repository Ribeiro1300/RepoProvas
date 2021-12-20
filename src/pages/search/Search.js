import React, { useState } from "react";
import FilterBySubject from "../../components/FilterBySubject";
import FilterByProfessor from "../../components/FilterByProfessor";
import styled from "styled-components";
import * as material from "@mui/material";
import * as G from "../../globalStyles/styles";

export default function Search() {
  const [filter, setFilter] = useState("subject");

  return (
    <G.Body>
      <G.Content>
        <FiltersWrapper>
          <material.FormControl component="fieldset">
            <material.FormLabel component="legend">
              Filtrar por
            </material.FormLabel>
            <material.RadioGroup aria-label="gender" defaultValue="subject">
              <material.FormControlLabel
                value="subject"
                control={<material.Radio />}
                label="Disciplina"
                onChange={() => setFilter("subject")}
              />
              <material.FormControlLabel
                value="professor"
                control={<material.Radio />}
                label="Professor"
                onChange={() => setFilter("professor")}
              />
            </material.RadioGroup>
          </material.FormControl>
        </FiltersWrapper>
        <ExamsWrapper>
          <material.InputLabel>
            {filter === "subject" ? "Disciplinas" : "Professores"}
          </material.InputLabel>
          {filter === "subject" ? <FilterBySubject /> : <FilterByProfessor />}
        </ExamsWrapper>
      </G.Content>
    </G.Body>
  );
}

const FiltersWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
`;

const ExamsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  position: absolute;
  top: 220px;
  bottom: 0px;

  label {
    width: 80%;
    height: 20px;
  }
`;
