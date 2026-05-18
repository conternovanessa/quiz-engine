import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Results() {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("answers")) || [];
    const s = Number(localStorage.getItem("score")) || 0;

    setAnswers(a);
    setScore(s);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Risultati</h1>

      <h2>
        Score: {score} / {answers.length}
      </h2>

      {answers.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          {/* DOMANDA */}
          <h3>
            {i + 1}. {item.question}
          </h3>

          {/* RISPOSTA UTENTE */}
          <p
            style={{
              color: item.isCorrect ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            Tua risposta: {item.selectedText}
          </p>

          {/* RISPOSTA CORRETTA (sempre visibile) */}
          {!item.isCorrect && (
            <p style={{ color: "green" }}>
              Risposta corretta: {item.correctText}
            </p>
          )}

          {/* SPIGAZIONE */}
          <p style={{ marginTop: "10px" }}>
            {item.explanation}
          </p>
        </div>
      ))}

      <button onClick={() => navigate("/")}>
        Torna alla Home
      </button>
    </div>
  );
}

export default Results;