/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { handleGetExams } from "../services/api";
import * as S from "./styles";

export default function RenderExams(filter) {
  const [exams, setExams] = useState([]);
  useEffect(async () => {
    try {
      const result = await handleGetExams(filter.filter.name, filter.filter.id);
      setExams(result);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const allTypes = [];
  exams.map((info) => {
    allTypes.push(info.type);
  });

  const allTypesFiltered = [...new Set(allTypes)];

  return (
    <S.Exams>
      {allTypesFiltered.map((info) => (
        <S.Exam>
          <p>Tipo: {info}</p>
          {exams.map((exam) => {
            if (exam.type === info) {
              return <S.SingleExam key={exam.id}> {exam.name}</S.SingleExam>;
            }
          })}
        </S.Exam>
      ))}
    </S.Exams>
  );
}
