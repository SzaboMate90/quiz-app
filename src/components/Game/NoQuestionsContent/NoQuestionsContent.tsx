import * as React from 'react';
import { StyledContainer, StyledIcon, StyledText, StyledLink } from './NoQuestionsContent.style';
import { withTranslation } from 'react-multi-lang';
import { TranslatorType } from "../../../globalTypes";

const NoQuestionsContent = ({ t } : { t : TranslatorType }) => {
  return (
    <StyledContainer>
      <StyledIcon size={100} />
      <StyledText>
        {t('no_questions_text1')}
      </StyledText>
      <StyledLink to={"/admin"}>
        {t('no_questions_text2')}
      </StyledLink>
    </StyledContainer>
  );
};

export default withTranslation(NoQuestionsContent);