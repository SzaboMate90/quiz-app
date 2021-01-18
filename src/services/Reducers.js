import Actions from './Actions';
import {getState, saveState, clearState} from './LocalStorage';

const QUESTIONS_STORAGE_KEY = "questions";
const questionsFromStorage = getState(QUESTIONS_STORAGE_KEY);
const defaultState = {
  currentQuestionIndex : 0,
  questions : questionsFromStorage ? JSON.parse(questionsFromStorage) : [],
  user : {
    name : "",
    score : 0
  }
};

function addQuestion(state, action) {
  const {questions} = state;
  const {question} = action;
  const newQuestions = [...questions, question];

  saveState(QUESTIONS_STORAGE_KEY, JSON.stringify(newQuestions));

  return {
    ...state,
    questions : newQuestions
  };
}

function removeQuestion(state, action) {
  const {questions} = state;
  const {questionIndex} = action;
  const newQuestions = questions.filter((question, index) => index !== questionIndex);

  if (newQuestions.length === 0) {
    clearState(QUESTIONS_STORAGE_KEY);
  }
  else {
    saveState(QUESTIONS_STORAGE_KEY, JSON.stringify(newQuestions));
  }

  return {
    ...state,
    questions : newQuestions
  };
}

function setCorrectAnswer(state, action) {
  const {questions} = state;
  const {questionIndex, answerIndex} = action;
  const newQuestions = [...questions];
  const currentQuestion = newQuestions[questionIndex];

  currentQuestion && currentQuestion.answers.forEach(answerItem => {
    answerItem.isCorrect = answerItem === answerIndex;
  });

  saveState(QUESTIONS_STORAGE_KEY, JSON.stringify(newQuestions));

  return {
    ...state,
    questions : newQuestions
  };
}

function editQuestion(state, action) {
  const {questions} = state;
  const {questionIndex, question} = action;
  const newQuestions = [...questions];
  const currentQuestion = newQuestions[questionIndex];
  const {newText, newAnswers} = question;

  if (currentQuestion) {
    newQuestions[questionIndex] = {
      ...currentQuestion,
      text : newText,
      answers : newAnswers
    }
  }

  saveState(QUESTIONS_STORAGE_KEY, JSON.stringify(newQuestions));

  return {
    ...state,
    questions : newQuestions
  };
}

function answerQuestion(state, action) {
  const {questions, currentQuestionIndex, user } = state;
  const {answerIndex} = action;
  const newQuestions = [...questions];
  const currentQuestion = newQuestions[currentQuestionIndex];
  let isCorrectAnswer = false;

  if (currentQuestion) {
    newQuestions[currentQuestionIndex].isAnswered = true;

    currentQuestion.answers.forEach((answerItem, index) => {
      if (answerIndex === index) {
        answerItem.selected = true;

        if (answerItem.isCorrect) {
          isCorrectAnswer = true;
        }
      }
    });
  }

  return {
    ...state,
    questions : newQuestions,
    user : {
      ...user,
      score : isCorrectAnswer ? user.score + 1 : user.score
    }
  };
}

function goToQuestion(state, action) {
  const {questions} = state;
  const {questionIndex} = action;

  return {
    ...state,
    currentQuestionIndex : questions[questionIndex] ? questionIndex : 0
  };
}

function setUserName(state, action) {
  const {userName} = action;

  return {
    ...state,
    user : {
      name : userName,
      score : 0
    }
  };
}

export default function(state = {...defaultState}, action) {
  switch (action.type) {
    case Actions.ADD_QUESTION :
      return addQuestion(state, action);
    case Actions.REMOVE_QUESTION :
      return removeQuestion(state, action);
    case Actions.SET_CORRECT_ANSWER :
      return setCorrectAnswer(state, action);
    case Actions.EDIT_QUESTION :
      return editQuestion(state, action);
    case Actions.SET_USER_NAME :
      return setUserName(state, action);
    case Actions.GO_TO_QUESTION :
      return goToQuestion(state, action);
    case Actions.ANSWER_QUESTION :
      return answerQuestion(state, action);
    default :
      return state;
  }
}