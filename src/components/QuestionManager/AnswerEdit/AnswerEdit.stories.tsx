import * as React from 'react';
import AnswerEdit from './AnswerEdit';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export const Default = () => (
    <AnswerEdit
        index={1}
        onChange={() => { }}
        onSetCorrectAnswer={() => { }}
        data={{
            text : text("Answer", "Simple answer"),
            isCorrect : boolean("Correct answer", false),
        }}
    />
);

export default {
    title: 'AnswerEdit',
    component: Default,
    decorators: [withKnobs]
};