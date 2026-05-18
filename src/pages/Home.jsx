// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("exam");

  function handleSelectMode(selectedMode) {
    setMode(selectedMode);
    localStorage.setItem("mode", selectedMode);
    navigate("/selection");
  }

  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">LearnCycle</h1>
        <p className="home__subtitle">Da quale modalità vuoi partire?</p>

        <div className="home__buttons">
          <button
            className="home__button home__button--exam"
            onClick={() => handleSelectMode("exam")}
          >
            <span className="home__button-label">Exam mode</span>
            <span className="home__button-caption">
              (Simulazione di esame)
            </span>
          </button>

          <button
            className="home__button home__button--learn"
            onClick={() => handleSelectMode("learn")}
          >
            <span className="home__button-label">Learning mode</span>
            <span className="home__button-caption">
              (Studio con spiegazione)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;