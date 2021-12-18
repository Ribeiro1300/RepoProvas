import React, { useState } from "react";
import FilterBySubject from "../../components/FilterBySubject";
import FilterByProfessor from "../../components/FilterByProfessor";
import * as material from "@mui/material";
import * as G from "../../globalStyles/styles";

export default function Search() {
  const [filter, setFilter] = useState("subject");

  return (
    <G.Body>
      <G.Content>
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

        <material.InputLabel>
          {filter === "subject" ? "Disciplina" : "Professor"}
        </material.InputLabel>
        {filter === "subject" ? <FilterBySubject /> : <FilterByProfessor />}
      </G.Content>
    </G.Body>
  );
}
