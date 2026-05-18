import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("quiz"));

    if (!data) return;

    setSession({
      mode: data.mode,
      questions: data.questions,
      currentIndex: 0,
      // in exam mode lo score verrà ricalcolato sulle risposte
      score: 0,
      // answers è un array indicizzato per domanda: answers[index] = answerObj
      answers: [],
      feedback: null,
      // risposta selezionata ma non ancora confermata su questa domanda
      selectedIndex: null,
    });
  }, []);

  if (!session) return <div>Loading quiz...</div>;

  const {
    questions,
    currentIndex,
    mode,
    score,
    answers,
    feedback,
    selectedIndex,
  } = session;

  const question = questions[currentIndex];
  const totalQuestions = questions.length;
  const isExamMode = mode === "exam";

  function updateSession(updates) {
    setSession((prev) => ({
      ...prev,
      ...updates,
    }));
  }

  // ricalcola lo score in base alle risposte corrette (usato in exam mode)
  function recalculateScore(updatedAnswers) {
    return updatedAnswers.reduce((acc, ans) => {
      if (ans && ans.isCorrect) return acc + 1;
      return acc;
    }, 0);
  }

  // selezione risposta (non conferma)
  function handleSelectAnswer(index) {
    // in learning mode, se c'è già feedback su questa domanda, non permetto di cambiare
    if (feedback && !isExamMode) return;

    updateSession({
      selectedIndex: index,
    });
  }

  // conferma risposta corrente (Conferma/Avanti)
  function handleConfirmAndNext() {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === question.correctAnswer;

    const newAnswer = {
      question: question.question,
      selectedIndex,
      selectedText: question.answers[selectedIndex],
      correctIndex: question.correctAnswer,
      correctText: question.answers[question.correctAnswer],
      isCorrect,
      explanation: question.explanation,
      subject: question.subject,
    };

    // copia l'array e inserisce/aggiorna la risposta all'indice corrente
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = newAnswer;

    if (isExamMode) {
      // exam mode: ricalcolo score da tutte le risposte
      const updatedScore = recalculateScore(updatedAnswers);
      goNext(updatedScore, updatedAnswers);
    } else {
      // learning mode: mostra feedback sotto la card
      const updatedScore = isCorrect ? score + 1 : score;
      updateSession({
        feedback: newAnswer,
        answers: updatedAnswers,
        score: updatedScore,
      });
    }
  }

  // dopo aver letto il feedback in learning mode, vai avanti
  function handleContinueAfterFeedback() {
    if (!feedback) return;

    // lo score è già aggiornato, answers già contiene la risposta
    goNext(score, answers);
  }

  // EXAM MODE: vai alla domanda precedente
  function handlePreviousExam() {
    if (!isExamMode) return;
    if (currentIndex === 0) return;

    const prevIndex = currentIndex - 1;
    const prevAnswer = answers[prevIndex];

    updateSession({
      currentIndex: prevIndex,
      feedback: null,
      selectedIndex: prevAnswer ? prevAnswer.selectedIndex : null,
    });
  }

  function goNext(updatedScore, updatedAnswers) {
    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      const savedAnswer = updatedAnswers[nextIndex];

      updateSession({
        currentIndex: nextIndex,
        score: updatedScore,
        answers: updatedAnswers,
        feedback: null,
        // se nella prossima domanda c'è già una risposta salvata, la ricarichiamo
        selectedIndex: savedAnswer ? savedAnswer.selectedIndex : null,
      });
    } else {
      // fine quiz
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));
      localStorage.setItem("score", updatedScore);

      navigate("/results");
    }
  }

  return (
    <div className="quiz">
      <div className="quiz__content">
        {/* Header */}
        <div className="quiz__header">
          <div className="quiz__mode">
            {isExamMode ? "Quiz mode Exam" : "Quiz mode Learning"}
          </div>
          <div className="quiz__progress">
            <span className="quiz__progress-current">
              {currentIndex + 1}
            </span>
            <span className="quiz__progress-total">
              /{totalQuestions}
            </span>
          </div>
        </div>

        {/* Card domanda */}
        <div className="quiz__card">
          <div className="quiz__subject-label">Materia del quiz</div>
          <div className="quiz__subject">{question.subject}</div>

          <div className="quiz__question">{question.question}</div>

          <div className="quiz__answers">
            {question.answers.map((a, i) => {
              const isSelected = selectedIndex === i;

              // solo in learning mode, dopo la conferma (feedback presente),
              // coloriamo corretta/sbagliata
              const isCorrectAnswer =
                !isExamMode && feedback && i === feedback.correctIndex;
              const isWrongSelected =
                !isExamMode &&
                feedback &&
                i === feedback.selectedIndex &&
                !feedback.isCorrect;

              let answerClass = "quiz__answer";
              if (isSelected && !feedback) {
                answerClass += " quiz__answer--selected";
              }
              if (isCorrectAnswer) {
                answerClass += " quiz__answer--correct";
              }
              if (isWrongSelected) {
                answerClass += " quiz__answer--wrong";
              }

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectAnswer(i)}
                  className={answerClass}
                  disabled={!!feedback && !isExamMode} // in learning mode, dopo feedback, non cambi più risposta
                >
                  <span className="quiz__answer-text">{a}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEEDBACK solo in learn mode (sotto la card) */}
        {!isExamMode && feedback && (
          <div className="quiz__feedback">
            <h3
              className={
                "quiz__feedback-title" +
                (feedback.isCorrect
                  ? " quiz__feedback-title--correct"
                  : " quiz__feedback-title--wrong")
              }
            >
              {feedback.isCorrect ? "Correct" : "Wrong"}
            </h3>

            {!feedback.isCorrect && (
              <p className="quiz__feedback-text">
                <b>Correct answer:</b> {feedback.correctText}
              </p>
            )}

            <p className="quiz__feedback-text">
              <b>Explanation:</b> {feedback.explanation}
            </p>
          </div>
        )}

        {/* Barra di azioni (sotto tutto) */}
        <div className="quiz__actions">
          {isExamMode && (
            <>
              <button
                className="quiz__next-button quiz__next-button--secondary"
                onClick={handlePreviousExam}
                disabled={currentIndex === 0}
              >
                Indietro
              </button>

              <button
                className="quiz__next-button"
                onClick={handleConfirmAndNext}
                disabled={selectedIndex === null}
              >
                Avanti
              </button>
            </>
          )}

          {!isExamMode && !feedback && (
            <button
              className="quiz__next-button"
              onClick={handleConfirmAndNext}
              disabled={selectedIndex === null}
            >
              Conferma
            </button>
          )}

          {!isExamMode && feedback && (
            <button
              className="quiz__next-button"
              onClick={handleContinueAfterFeedback}
            >
              Avanti
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;