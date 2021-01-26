import * as React from 'react';
import Answers from './Answers';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Answers',
  component: Answers,
  decorators: [withKnobs]
};
// questionIndex, data, isAnswered, temporarySelectedAnswerIndex, onAnswerClick
export const Default = () => {
    let temporarySelectedAnswerIndex = 0;

    return (
        <Answers
            questionIndex={1}
            data={[{
                text : text("First answer text", "First answer"),
                isCorrect : boolean("First answer is correct", false),
                selected : boolean("First answer was selected", false)
            }, {
                text : text("Second answer text", "Second answer"),
                isCorrect : boolean("Second answer is correct", false),
                selected : boolean("Second answer was selected", false)
            }, {
                text : text("Third answer text", "Third answer"),
                isCorrect : boolean("Third answer is correct", false),
                selected : boolean("Third answer was selected", false)
            }, {
                text : text("Fourth answer text", "Fourth answer"),
                isCorrect : boolean("Fourth answer is correct", false),
                selected : boolean("Fourth answer was selected", false)
            }]}
            temporarySelectedAnswerIndex={temporarySelectedAnswerIndex}
            isAnswered={boolean("Question answered", true)}
            onAnswerClick={newSelectedAnswerIndex => { temporarySelectedAnswerIndex = newSelectedAnswerIndex; }}
        />
    );
};
