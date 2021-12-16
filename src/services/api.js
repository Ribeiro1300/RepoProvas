/* eslint-disable no-undef */
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export async function handleSubjects() {
  const result = await API.get("/subjects");
  return result.data;
}

export async function handleProfessors(subject) {
  const result = await API.get("/professors/" + subject);
  return result.data;
}

export async function handleNewExam(body) {
  const result = await API.post("/exams", body);
  return result;
}
