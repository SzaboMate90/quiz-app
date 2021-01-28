import * as React from 'react';
import { StyledContent, StyledLinks, StyledLink } from './Header.style';
import {setTranslations, setDefaultLanguage, withTranslation} from 'react-multi-lang';
import EN from '../../translations/en.json';
import HU from '../../translations/hu.json';
import LocalStorage from "../../services/LocalStorage";
import {LANGUAGE_STORAGE_KEY} from "../../services/Reducers";

const LANGUAGES = [{
    text : "Magyar",
    code : "HU"
}, {
    text : "English",
    code : "EN"
}];
const DEFAULT_LANGUAGE = "EN";
const CURRENT_STORED_LANGUAGE = LocalStorage.getState(LANGUAGE_STORAGE_KEY);

setTranslations({HU, EN});
setDefaultLanguage(CURRENT_STORED_LANGUAGE || DEFAULT_LANGUAGE);

export const Header = ({ t }) => (
 <StyledContent>
     {LANGUAGES.map((language, index) => (
      <StyledLink to={"#"} key={index} onClick={() => {
          LocalStorage.saveState(LANGUAGE_STORAGE_KEY, language.code);
          window.location.reload();
      }}>
          {language.text}
      </StyledLink>
     ))}
     <StyledLinks>
       <StyledLink to={"/admin"}>
        {t('manage_question')}
       </StyledLink>
       <StyledLink to={"/"}>
        {t('lets_play')}
       </StyledLink>
     </StyledLinks>
 </StyledContent>
);

export default withTranslation(Header);
