import { useState } from "react";
import { useNavigate } from "react-router-dom";

import subjects from "../data/subjects";
import generateQuiz from "../utils/generateQuiz";

function Selection() {
  const navigate = useNavigate();

  // materie selezionate
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // modalità: recuperata da localStorage, default "exam"
  const [mode] = useState(localStorage.getItem("mode") || "exam");

  function toggleSubject(subjectId) {
    setSelectedSubjects((prev) => {
      if (prev.includes(subjectId)) {
        return prev.filter((id) => id !== subjectId);
      }
      return [...prev, subjectId];
    });
  }

  function handleGenerateQuiz() {
    const quiz = generateQuiz(selectedSubjects, mode);

    localStorage.setItem("quiz", JSON.stringify(quiz));
    localStorage.setItem("mode", mode);

    navigate("/quiz");
  }

  return (
    <div className="selection">
      <div className="selection__content">
        {/* Badge modalità in alto a sinistra */}
        <div className="selection__mode-badge">
          {mode === "learn" ? "Learning mode" : "Exam mode"}
        </div>

        {/* Titolo + sottotitolo */}
        <h1 className="selection__title">
          SU QUALI MATERIE VUOI ALLENARTI?
        </h1>
        <p className="selection__subtitle">Esame per il 29 maggio</p>

        {/* Card scura con lista materie (solo quelle enabled) */}
        <div className="selection__card">
          {subjects.map((group) => {
            const enabledSubjects = group.subjects.filter(
              (subject) => subject.enabled
            );

            if (enabledSubjects.length === 0) return null;

            return (
              <div key={group.id} className="selection__group">
                {enabledSubjects.map((subject) => (
                  <label
                    key={subject.id}
                    className="selection__subject"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => toggleSubject(subject.id)}
                    />
                    <span className="selection__subject-label">
                      {subject.name}
                    </span>
                  </label>
                ))}
              </div>
            );
          })}
        </div>

        {/* Bottone Genera quiz */}
        <div className="selection__actions">
          <button
            className="selection__button"
            onClick={handleGenerateQuiz}
            disabled={selectedSubjects.length === 0}
          >
            Genera quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selection;