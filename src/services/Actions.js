export const ADD_QUESTION = "ADD_TO_ADD_QUESTIONCART";
export const addQuestion = question => ({ type : ADD_QUESTION, question });

export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const removeQuestion = questionIndex => ({ type : REMOVE_QUESTION, questionIndex });

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const answerQuestion = answerIndex => ({ type : ANSWER_QUESTION, answerIndex });

export const GO_TO_QUESTION = "GO_TO_QUESTION";
export const goToQuestion = questionIndex => ({ type : GO_TO_QUESTION, questionIndex });

export const SET_CORRECT_ANSWER = "SET_CORRECT_ANSWER";
export const setCorrectAnswer = (questionIndex, answerIndex) => ({ type : SET_CORRECT_ANSWER, questionIndex, answerIndex });

export const EDIT_QUESTION = "EDIT_QUESTION";
export const editQuestion = (questionIndex, question) => ({ type : EDIT_QUESTION, questionIndex, question });

export const SET_USER_NAME = "SET_USER_NAME";
export const setUserName = userName => ({ type : SET_USER_NAME, userName });

export default {
  ADD_QUESTION,
  addQuestion,
  REMOVE_QUESTION,
  removeQuestion,
  SET_CORRECT_ANSWER,
  setCorrectAnswer,
  EDIT_QUESTION,
  editQuestion,
  SET_USER_NAME,
  setUserName,
  ANSWER_QUESTION,
  answerQuestion,
  GO_TO_QUESTION,
  goToQuestion
};