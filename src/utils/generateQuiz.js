import behavioralResearchQuestions from "../data/questions/behavioral-research-questions.js";
import disegnareConPersoneQuestions from "../data/questions/disegnare-con-le-persone-questions.js";
import fondamentiAccessibilitàQuestions from "../data/questions/fondamenti-accessibilita-questions.js";
import inclusiveWritingQuestions from "../data/questions/inclusive-ux-writing-complete-questions.js";
import innovationManagementQuestions from "../data/questions/innovation-management-questions.js";
import marketing4PQuestions from "../data/questions/marketing-bisogni-posizionamento-questions.js";
import modelliProcessiOrganizzativiQuestions from "../data/questions/modelli-processi-organizzativi-questions.js";
import projectManagementQuestions from "../data/questions/project-management-questions.js";
import socialInclusionInclusiveEconomyQuestions from "../data/questions/social-inclusion-inclusive-economics-questions.js";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getQuestionCount(totalSubjects) {
  switch (totalSubjects) {
    case 1:
      return 20;

    case 2:
      return 10;

    case 3:
      return 7;

    case 4:
      return 5;

    case 5:
      return 4;

    case 6:
      return Math.random() > 0.5 ? 3 : 4;

    case 7:
      return 3;

    case 8:
      return Math.random() > 0.5 ? 2 : 3;

    case 9:
      return Math.random() > 0.5 ? 2 : 3;

    default:
      return 3;
  }
}

function pickQuestions(list, totalSubjects) {
  const amount = getQuestionCount(totalSubjects);

  return shuffle(list).slice(0, amount);
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

  selectedSubjects.forEach((subjectId) => {
    const subjectData = subjectsRegistry[subjectId];

    if (!subjectData) return;

    const selected = pickQuestions(subjectData.questions).map(
      (q) => ({
        ...q,

        subject: subjectData.name,

        correctAnswer: q.correct,
      })
    );

    questions.push(...selected);
  });

  return {
    mode,
    questions,
    createdAt: Date.now(),
  };
}

export default generateQuiz;