// src/pages/Selection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import subjects from "../data/subjects";
import generateQuiz from "../utils/generateQuiz";

function Selection() {
  const navigate = useNavigate();

  // materie selezionate (stessa logica di prima)
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // modalità: la recuperiamo da localStorage, se c'è, altrimenti "exam"
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "exam"
  );

  function toggleSubject(subjectId) {
    setSelectedSubjects((prev) => {
      if (prev.includes(subjectId)) {
        return prev.filter((id) => id !== subjectId);
      }
      return [...prev, subjectId];
    });
  }

  function handleGenerateQuiz() {
    // genera il quiz con la stessa logica di prima
    const quiz = generateQuiz(selectedSubjects, mode);

    localStorage.setItem("quiz", JSON.stringify(quiz));
    localStorage.setItem("mode", mode);

    navigate("/quiz");
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Seleziona le materie</h1>
      <p style={{ opacity: 0.7 }}>
        Modalità corrente: <strong>{mode}</strong>
      </p>

      {subjects.map((group) => (
        <div key={group.id} style={{ marginTop: "16px" }}>
          <h2>{group.name}</h2>

          {group.subjects.map((subject) => (
            <div key={subject.id}>
              <label style={{ opacity: subject.enabled ? 1 : 0.5 }}>
                <input
                  type="checkbox"
                  disabled={!subject.enabled}
                  checked={selectedSubjects.includes(subject.id)}
                  onChange={() => toggleSubject(subject.id)}
                />
                {subject.name}
              </label>
            </div>
          ))}
        </div>
      ))}

      <p style={{ marginTop: "16px" }}>
        Selected: {JSON.stringify(selectedSubjects)}
      </p>

      <button
        onClick={handleGenerateQuiz}
        disabled={selectedSubjects.length === 0}
        style={{ marginTop: "12px" }}
      >
        Genera Quiz
      </button>
    </div>
  );
}

export default Selection;