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
      score: 0,
      answers: [],
      feedback: null,
    });
  }, []);

  if (!session) return <div>Loading quiz...</div>;

  const { questions, currentIndex, mode, score, answers, feedback } =
    session;

  const question = questions[currentIndex];

  function updateSession(updates) {
    setSession((prev) => ({
      ...prev,
      ...updates,
    }));
  }

  function handleAnswer(index) {
    const isCorrect = index === question.correctAnswer;

    const newAnswer = {
      question: question.question,

      selectedIndex: index,
      selectedText: question.answers[index],

      correctIndex: question.correctAnswer,
      correctText: question.answers[question.correctAnswer],

      isCorrect,
      explanation: question.explanation,
    };

    // EXAM MODE
    if (mode === "exam") {
      const updatedAnswers = [...answers, newAnswer];

      const updatedScore = isCorrect ? score + 1 : score;

      goNext(updatedScore, updatedAnswers);
      return;
    }

    // LEARNING MODE
    updateSession({
      feedback: newAnswer,
      answers: [...answers, newAnswer],
      score: isCorrect ? score + 1 : score,
    });
  }

  function goNext(updatedScore, updatedAnswers) {
    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      updateSession({
        currentIndex: nextIndex,
        score: updatedScore,
        answers: updatedAnswers,
        feedback: null,
      });
    } else {
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));
      localStorage.setItem("score", updatedScore);

      navigate("/results");
    }
  }

  return (
    <div>
      <h2>Quiz</h2>

      <p>
        Mode: <b>{mode}</b>
      </p>

      <h3>
        {currentIndex + 1}/{questions.length}
      </h3>

      <h4>{question.subject}</h4>

      <h2>{question.question}</h2>

      {question.answers.map((a, i) => {
        const isCorrectAnswer =
          feedback && i === question.correctIndex;

        const isWrongSelected =
          feedback && feedback.selectedIndex === i && !feedback.isCorrect;

        return (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={!!feedback && mode === "learn"}
            style={{
              display: "block",
              margin: "8px 0",
              background: isCorrectAnswer
                ? "green"
                : isWrongSelected
                ? "red"
                : "",
            }}
          >
            {a}
          </button>
        );
      })}

      {feedback && mode === "learn" && (
        <div style={{ marginTop: "20px" }}>
          <h3>{feedback.isCorrect ? "✔ Correct" : "✘ Wrong"}</h3>

          {!feedback.isCorrect && (
            <p>
              <b>Correct answer:</b> {feedback.correctText}
            </p>
          )}

          <p>
            <b>Explanation:</b> {feedback.explanation}
          </p>

          <button
            onClick={() =>
              goNext(
                feedback.isCorrect ? score + 1 : score,
                answers
              )
            }
          >
            Prosegui
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;