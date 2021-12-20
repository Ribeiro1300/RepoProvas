/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import * as G from "../../globalStyles/styles";
import * as material from "@mui/material";
import {
  handleNewExam,
  handleProfessors,
  handleSubjects,
} from "../../services/api";
import { Navigate, useNavigate } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

export default function NewExam() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");
  const [link, setLink] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);
  const [allProfessors, setAllProfessors] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const result = await handleSubjects();
      setAllSubjects(result);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  async function getAllProfessors(subject) {
    const result = await handleProfessors(subject);
    setAllProfessors(result);
  }

  async function sendExam(e) {
    e.preventDefault();
    const body = {
      name: name,
      type: type,
      subject_id: subject,
      professor_id: professor,
      link: link,
    };

    try {
      const result = await handleNewExam(body);
      if (!result) alert("Erro ao enviar a prova, tente novamente");
      alert("Prova enviada com sucesso");
      navigate("/");
    } catch (e) {
      if (e.message === "Request failed with status code 404")
        alert("Falha na conexão, tente novamente!");

      if (e.message === "Request failed with status code 403")
        alert("Prova já existente!");
    }
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
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
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
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
            <material.InputLabel>Disciplina</material.InputLabel>
            <material.Select
              required
              value={subject}
              onChange={(elem) => {
                getAllProfessors(elem.target.value);
                setSubject(elem.target.value);
              }}
              label="Subject"
            >
              {allSubjects.map((info) => (
                <material.MenuItem key={info.id} value={info.id}>
                  {info.name}
                </material.MenuItem>
              ))}
            </material.Select>
          </material.FormControl>
          <material.FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
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
              {allProfessors.map((info) => (
                <material.MenuItem key={info.id} value={info.id}>
                  {info.name}
                </material.MenuItem>
              ))}
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
