import behavioralResearchQuestions from "../data/questions/behavioral-research-questions.js";
import disegnareConPersoneQuestions from "../data/questions/disegnare-con-le-persone-questions.js";
import fondamentiAccessibilitàQuestions from "../data/questions/fondamenti-accessibilita-questions.js";
import inclusiveWritingQuestions from "../data/questions/inclusive-ux-writing-complete-questions.js";
import innovationManagementQuestions from "../data/questions/innovation-management-questions.js";
import marketing4PQuestions from "../data/questions/marketing-bisogni-posizionamento-questions.js";
import modelliProcessiOrganizzativiQuestions from "../data/questions/modelli-processi-organizzativi-questions.js";
import projectManagementQuestions from "../data/questions/project-management-questions.js";
import socialInclusionInclusiveEconomyQuestions from "../data/questions/social-inclusion-inclusive-economics-questions.js";

const MIN_QUESTIONS = 20;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getTotalQuestions(subjectCount) {
  // minimo 20, ma cresce con le materie
  return Math.max(MIN_QUESTIONS, subjectCount * 7);
}

function distributeQuestions(subjectCount) {
  const total = getTotalQuestions(subjectCount);

  const base = Math.floor(total / subjectCount);
  const remainder = total % subjectCount;

  return Array.from({ length: subjectCount }, (_, i) =>
    base + (i < remainder ? 1 : 0)
  );
}

const subjectsRegistry = {
  "innovation-management": {
    name: "Innovation Management in Digital Context",
    questions: innovationManagementQuestions,
  },
  "behavioral-research": {
    name: "Behavioral Research",
    questions: behavioralResearchQuestions,
  },
  "project-management": {
    name: "Project Management",
    questions: projectManagementQuestions,
  },
  "social-inclusion-inclusive-economy": {
    name: "Social Inclusion & Inclusive Economy",
    questions: socialInclusionInclusiveEconomyQuestions,
  },
  "modelli-processi-organizzativi": {
    name: "Modelli e Processi Organizzativi",
    questions: modelliProcessiOrganizzativiQuestions,
  },
  "fondamenti-accessibilita": {
    name: "Fondamenti di Accessibilità",
    questions: fondamentiAccessibilitàQuestions,
  },
  "marketing-4p": {
    name: "Marketing: bisogni e posizionamento",
    questions: marketing4PQuestions,
  },
  "disegnare-con-le-persone": {
    name: "Disegnare con le persone",
    questions: disegnareConPersoneQuestions,
  },
  "inclusive-ux-writing": {
    name: "Inclusive UX Writing",
    questions: inclusiveWritingQuestions,
  },
};

function generateQuiz(selectedSubjects, mode) {
  let questions = [];

  if (!selectedSubjects || selectedSubjects.length === 0) {
    return {
      mode,
      questions: [],
      createdAt: Date.now(),
    };
  }

  const distribution = distributeQuestions(selectedSubjects.length);

  selectedSubjects.forEach((subjectId, index) => {
    const subjectData = subjectsRegistry[subjectId];
    if (!subjectData) return;

    const amount = distribution[index];

    const selected = shuffle(subjectData.questions)
      .slice(0, amount)
      .map((q) => ({
        ...q,
        subject: subjectData.name,
        correctAnswer: q.correct,
      }));

    questions.push(...selected);
  });

  return {
    mode,
    questions: shuffle(questions),
    createdAt: Date.now(),
  };
}

export default generateQuiz;