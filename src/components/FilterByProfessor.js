import React, { useState, useEffect } from "react";
import { handleProfessors } from "../services/api";
import RenderExams from "./RenderExams";

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
    <div>
      <p onClick={() => setFilter({})}>voltar</p>
      {!filter.name ? (
        professor.map((info) => {
          if (info.qt != 0) {
            return (
              <div
                onClick={() => setFilter({ id: info.id, name: "professor" })}
                key={info.id}
              >
                {info.name}
                <p>{info.qt}</p>
              </div>
            );
          }
        })
      ) : (
        <RenderExams filter={filter} />
      )}
    </div>
  );
}
