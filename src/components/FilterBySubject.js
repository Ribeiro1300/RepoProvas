import React, { useState, useEffect } from "react";
import { handleSubjects } from "../services/api";
import RenderExams from "./RenderExams";

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
    allSemesters.push({ id: info.id, semester: info.semester });
  });

  const allSemestersFiltered = [...new Set(allSemesters)];

  return (
    <div>
      <p onClick={() => setFilter({})}>voltar</p>
      {!filter.name ? (
        allSemestersFiltered.map((info) => (
          <div key={info.id}>
            <h2>{info.semester}</h2>
            {subjects.map((subject) => {
              if (subject.semester === info.semester && subject.qt != 0) {
                return (
                  <div
                    key={subject.id}
                    onClick={() =>
                      setFilter({ id: subject.id, name: "subject" })
                    }
                  >
                    {subject.name}
                    <p>{subject.qt}</p>
                  </div>
                );
              }
            })}
          </div>
        ))
      ) : (
        <RenderExams filter={filter} />
      )}
    </div>
  );
}
