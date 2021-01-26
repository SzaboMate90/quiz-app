import * as React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Question from './Question';

export const Default = () => (
    <Question
        isAnswered={boolean("Answered", true)}
        isGaveCorrectAnswer={boolean("Gave correct answer", true)}
    >
        {text("Question text", "Sample question")}
    </Question>
);

export default {
    title: 'Question',
    component: Default,
    decorators: [withKnobs]
};