import * as React from 'react';
import Answer from './Answer';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export const Default = () => (
    <Answer
        index={1}
        data={{
          text : text("Answer", "Simple answer"),
          isCorrect : boolean("Correct answer", false),
          selected : boolean("My answer", false)
        }}
        isTemporarySelected={boolean("Temporary selected", false)}
        isAnswered={boolean("Answered", true)}
        onClick={() => { }}
    />
);

export default {
    title: 'Answer',
    component: Default,
    decorators: [withKnobs]
};