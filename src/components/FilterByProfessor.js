import React, { useState, useEffect } from "react";
import { handleProfessors } from "../services/api";
import RenderExams from "./RenderExams";
import * as S from "./styles";

export default function FilterByProfessor() {
  const [professor, setProfessor] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(async () => {
    try {
      const result = await handleProfessors("");
      setProfessor(result);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  return (
    <S.Exams>
      {!filter.name ? (
        professor.map((info) => {
          if (info.qt != 0) {
            return (
              <S.Exam
                style={{ cursor: "pointer" }}
                onClick={() => setFilter({ id: info.id, name: "professor" })}
                key={info.id}
              >
                Professor: {info.name}
                <p>Quantidade: {info.qt}</p>
              </S.Exam>
            );
          }
        })
      ) : (
        <>
          <RenderExams filter={filter} />
          <S.Back onClick={() => setFilter({})}>Voltar</S.Back>
        </>
      )}
    </S.Exams>
  );
}
