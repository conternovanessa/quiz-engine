import subjects from "../data/subjects";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateQuiz from "../utils/generateQuiz";

function Home() {
  const navigate = useNavigate();
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // 🔥 NUOVO: modalità quiz
  const [mode, setMode] = useState("exam"); 
  // default: exam mode

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
    <div>
      <h1>Quiz Engine</h1>

      {/* 🔥 SELEZIONE MODALITÀ */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Modalità</h3>

        <label>
          <input
            type="radio"
            value="exam"
            checked={mode === "exam"}
            onChange={() => setMode("exam")}
          />
          Exam mode (simulazione esame)
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="learn"
            checked={mode === "learn"}
            onChange={() => setMode("learn")}
          />
          Learning mode (studio con spiegazioni)
        </label>
      </div>

      {/* MATERIE */}
      {subjects.map((group) => (
        <div key={group.id}>
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

      <p>
        Selected: {JSON.stringify(selectedSubjects)}
      </p>

      <button onClick={handleGenerateQuiz}>
        Genera Quiz
      </button>
    </div>
  );
}

export default Home;