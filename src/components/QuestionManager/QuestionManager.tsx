import * as React from 'react';
import { StyledContainer, StyledLink } from './QuestionManager.style';
import AddQuestion from './AddQuestion/AddQuestion';
import Questions from './Questions/Questions';
import { withTranslation } from 'react-multi-lang';
import {TranslatorType} from "../../globalTypes";

export const QuestionManager = ({ t } : { t : TranslatorType }) => (
    <StyledContainer>
        <Questions />
        <AddQuestion />
        <StyledLink to={"/"}>
            {t('lets_play')}
        </StyledLink>
    </StyledContainer>
);

export default withTranslation(QuestionManager);