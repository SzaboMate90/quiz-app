import {
  QuestionType,
  AnswerIndexType,
  QuestionIndexType,
  UserNameType, AnswerType
} from "../globalTypes";

export interface GlobalActionType {
  type : string,
  question : QuestionType,
  questionIndex : QuestionIndexType,
  answer : AnswerType,
  answerIndex : AnswerIndexType,
  userName : UserNameType
}

export interface AddQuestionType { type : string, question : QuestionType }
export const ADD_QUESTION = "ADD_QUESTION";
export const addQuestion = (question : QuestionType) => ({ type : ADD_QUESTION, question });

export interface RemoveQuestionType { type : string, questionIndex : QuestionIndexType }
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const removeQuestion = (questionIndex : QuestionIndexType) => ({ type : REMOVE_QUESTION, questionIndex });

export interface AnswerQuestionType { type : string, answerIndex : AnswerIndexType }
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const answerQuestion = (answerIndex : AnswerIndexType) => ({ type : ANSWER_QUESTION, answerIndex });

export interface GoToQuestionType { type : string, questionIndex : QuestionIndexType }
export const GO_TO_QUESTION = "GO_TO_QUESTION";
export const goToQuestion = (questionIndex : QuestionIndexType) => ({ type : GO_TO_QUESTION, questionIndex });

export interface SetCorrectAnswerType { type : string, questionIndex : QuestionIndexType, answerIndex : AnswerIndexType }
export const SET_CORRECT_ANSWER = "SET_CORRECT_ANSWER";
export const setCorrectAnswer = (questionIndex : QuestionIndexType, answerIndex : AnswerIndexType) => ({ type : SET_CORRECT_ANSWER, questionIndex, answerIndex });

export interface EditQuestionType { type : string, questionIndex : QuestionIndexType, question : QuestionType }
export const EDIT_QUESTION = "EDIT_QUESTION";
export const editQuestion = (questionIndex : QuestionIndexType, question : QuestionType) => ({ type : EDIT_QUESTION, questionIndex, question });

export interface SetUserNameType { type : string, userName : UserNameType }
export const SET_USER_NAME = "SET_USER_NAME";
export const setUserName = (userName : UserNameType) => ({ type : SET_USER_NAME, userName });

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