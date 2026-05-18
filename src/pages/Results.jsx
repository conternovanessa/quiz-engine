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

  const total = answers.length;

  return (
    <div className="results">
      <div className="results__content">
        {/* Header */}
        <h1 className="results__title">Risultati</h1>
        <div className="results__score">
          {score}/{total}
        </div>

        {/* Lista domande */}
        <div className="results__list">
          {answers.map((item, i) => {
            const isCorrect = item.isCorrect;

            return (
              <div key={i} className="results__item">
                {/* Testo domanda numerata */}
                <h2 className="results__question">
                  {i + 1}. {item.question}
                </h2>

                {/* Card risposta */}
                <div
                  className={
                    "results__card" +
                    (isCorrect
                      ? " results__card--correct"
                      : " results__card--wrong")
                  }
                >
                  <p className="results__answer-status">
                    {isCorrect ? "Correct answer" : "Wrong answer"}
                  </p>

                  <p className="results__answer-label">Tua risposta</p>
                  <p
                    className={
                      "results__answer-text" +
                      (isCorrect
                        ? " results__answer-text--correct"
                        : " results__answer-text--wrong")
                    }
                  >
                    {item.selectedText}
                  </p>

                  {!isCorrect && (
                    <>
                      <p className="results__answer-label">
                        Correct answer
                      </p>
                      <p className="results__answer-text">
                        {item.correctText}
                      </p>
                    </>
                  )}

                  <p className="results__answer-label">Explanation</p>
                  <p className="results__answer-text">
                    {item.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="results__actions">
          <button
            className="results__button"
            onClick={() => navigate("/")}
          >
            Torna alla Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;