/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { handleSubjects } from "../services/api";
import RenderExams from "./RenderExams";
import * as S from "./styles";

export default function FilterBySubject() {
  const [subjects, setSubjects] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(async () => {
    try {
      const result = await handleSubjects();
      setSubjects(result);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const allSemesters = [];
  subjects.map((info) => {
    allSemesters.push(info.semester);
  });

  const allSemestersFiltered = [...new Set(allSemesters)];
  return (
    <S.Exams>
      {!filter.name ? (
        allSemestersFiltered.map((info) => (
          <S.Exam key={info}>
            <h2>Período: {info}</h2>
            {subjects.map((subject) => {
              if (subject.semester === info && subject.qt != 0) {
                return (
                  <S.SingleExam
                    key={subject.id}
                    onClick={() =>
                      setFilter({ id: subject.id, name: "subject" })
                    }
                  >
                    Disciplina: {subject.name}
                    <p>Quantidade: {subject.qt}</p>
                  </S.SingleExam>
                );
              }
            })}
          </S.Exam>
        ))
      ) : (
        <>
          <RenderExams filter={filter} />
          <S.Back onClick={() => setFilter({})}>Voltar</S.Back>
        </>
      )}
    </S.Exams>
  );
}
