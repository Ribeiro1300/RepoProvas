import React, { useState, useEffect } from "react";
import * as G from "../../globalStyles/styles";
import * as material from "@mui/material";

const ariaLabel = { "aria-label": "description" };

export default function NewExam() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {}, []);
  const mockSubject = [
    { id: 1, name: "Cálculo1" },
    { id: 1, name: "Cálculo2" },
    { id: 1, name: "Cálculo3" },
    { id: 1, name: "Cálculo4" },
  ];
  async function sendExam(e) {
    e.preventDefault();
    console.log(name, type, subject, professor, link);
  }
  return (
    <G.Body>
      <G.Content>
        <G.Title>Adicione sua prova</G.Title>
        <G.Form onSubmit={sendExam}>
          <material.FormControl variant="standard">
            <material.InputLabel>Nome</material.InputLabel>
            <material.Input
              required
              value={name}
              onChange={(elem) => setName(elem.target.value)}
              placeholder="2020.1"
              inputProps={ariaLabel}
            />
          </material.FormControl>
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <material.InputLabel>Tipo</material.InputLabel>
            <material.Select
              required
              value={type}
              onChange={(elem) => {
                setType(elem.target.value);
              }}
              label="Subject"
            >
              <material.MenuItem value="P1">P1</material.MenuItem>
              <material.MenuItem value="P2">P2</material.MenuItem>
              <material.MenuItem value="P3">P3</material.MenuItem>
              <material.MenuItem value="2ch">2ch</material.MenuItem>
              <material.MenuItem value="other">Outras</material.MenuItem>
            </material.Select>
          </material.FormControl>
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <material.InputLabel>Disciplina</material.InputLabel>
            <material.Select
              required
              value={subject}
              onChange={(elem) => {
                setSubject(elem.target.value);
              }}
              label="Subject"
            >
              {mockSubject.map((info) => (
                <material.MenuItem key={info.id} value={info.name}>
                  {info.name}
                </material.MenuItem>
              ))}
            </material.Select>
          </material.FormControl>
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <material.InputLabel>Professor</material.InputLabel>
            <material.Select
              required
              disabled={subject ? false : true}
              value={professor}
              onChange={(elem) => {
                setProfessor(elem.target.value);
              }}
              label="Subject"
            >
              <material.MenuItem value={10}>Ten</material.MenuItem>
              <material.MenuItem value={20}>Twenty</material.MenuItem>
              <material.MenuItem value={30}>Thirty</material.MenuItem>
            </material.Select>
          </material.FormControl>
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <material.InputLabel>Link</material.InputLabel>
            <material.Input
              required
              value={link}
              type="url"
              onChange={(elem) => setLink(elem.target.value)}
              placeholder="https://..."
              inputProps={ariaLabel}
            />
          </material.FormControl>
          <material.Button type="submit" variant="contained">
            Enviar Prova
          </material.Button>
        </G.Form>
      </G.Content>
    </G.Body>
  );
}
