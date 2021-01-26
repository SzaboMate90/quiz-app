import * as React from 'react';

export type TranslatorType = (text) => string;
export type ChildrenType = React.ReactNode | string;
export type PropsChildrenType = {
    children : ChildrenType
};
export type QuestionIndexType = number;
export type AnswerIndexType = number;
export type CurrentQuestionIndexType = number;
export type UserNameType = string;
export type UserScoreType = number;
export interface UserType {
    name : UserNameType,
    score : UserScoreType
}
export type AnswerTextType = string;
export type AnswerIsCorrectType = boolean;
export type AnswerSelectedType = boolean;
export interface AnswerType {
    text : AnswerTextType,
    isCorrect ?: AnswerIsCorrectType,
    selected ?: AnswerSelectedType
}
export type AnswersType = Array<AnswerType>;
export type QuestionTextType = string;
export type QuestionIsAnsweredType = boolean;
export interface QuestionType {
    text : QuestionTextType,
    answers : AnswersType,
    isAnswered ?: QuestionIsAnsweredType
}
export type QuestionsType = Array<QuestionType>;