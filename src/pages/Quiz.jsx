import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function Quiz() {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("quiz"));
    if (!data) return;

    // Per ogni domanda:
    // - incapsula le risposte in oggetti { text, isCorrect }
    // - mischia questi oggetti
    // - ricava il nuovo indice della risposta corretta
    const shuffledQuestions = data.questions.map((q) => {
      const answerObjects = q.answers.map((text, index) => ({
        text,
        isCorrect: index === q.correctAnswer,
      }));

      const shuffled = shuffleArray(answerObjects);
      const newCorrectIndex = shuffled.findIndex((a) => a.isCorrect);

      return {
        ...q,
        answers: shuffled.map((a) => a.text),
        correctAnswer: newCorrectIndex,
      };
    });

    setSession({
      mode: data.mode,
      questions: shuffledQuestions,
      currentIndex: 0,
      score: 0,
      answers: [],
      feedback: null,
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

  function recalculateScore(updatedAnswers) {
    return updatedAnswers.reduce((acc, ans) => {
      if (ans && ans.isCorrect) return acc + 1;
      return acc;
    }, 0);
  }

  function handleSelectAnswer(index) {
    if (feedback && !isExamMode) return;

    updateSession({
      selectedIndex: index,
    });
  }

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

    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = newAnswer;

    if (isExamMode) {
      const updatedScore = recalculateScore(updatedAnswers);
      goNext(updatedScore, updatedAnswers);
    } else {
      const updatedScore = isCorrect ? score + 1 : score;
      updateSession({
        feedback: newAnswer,
        answers: updatedAnswers,
        score: updatedScore,
      });
    }
  }

  function handleContinueAfterFeedback() {
    if (!feedback) return;
    goNext(score, answers);
  }

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
        selectedIndex: savedAnswer ? savedAnswer.selectedIndex : null,
      });
    } else {
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
                  disabled={!!feedback && !isExamMode}
                >
                  <span className="quiz__answer-text">{a}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEEDBACK solo in learn mode */}
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

        {/* Barra di azioni */}
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