// src/pages/ErrorPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // stessa rotta della tua Home
  };

  return (
    <div className="error">
      <h1 className="error__title">404 Not Found</h1>

      <div className="error__header">
        <img src="/logo.png" alt="LearnCycle logo" className="error__logo" />

        <button className="error__home-button" onClick={goHome}>
          Torna alla home
        </button>
      </div>

      <p className="error__message">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
    </div>
  );
}

export default ErrorPage;