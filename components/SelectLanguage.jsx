import GB from 'country-flag-icons/react/3x2/GB';
import IT from 'country-flag-icons/react/3x2/IT';
import { useState } from 'react';
import SuperTokens from "supertokens-auth-react";
import { config, impostaLingua } from '../translations/config';
import { getLng, setCookie } from '../utils/clientUtils';

const iconStyle = {
  width: 18,
  marginLeft: '10px',
  cursor: 'pointer',
}

const selectedIconStyle = {
  width: 28,
  marginLeft: '10px',
  cursor: 'pointer',
  padding: 2,
  border: '1px solid #000',
}

const SelectLanguage = () => {
  const [language, setLanguage] = useState(getLng());
  const tCongif = config;

  function changeLanguage(code) {
    SuperTokens.changeLanguage(code);
    impostaLingua(code);

    setCookie('sCurrLanguage', code, { path: '/' });
    setLanguage(code);
  }

  return (
    <>
      <GB tittle="English" style={(language === 'en') ? selectedIconStyle : iconStyle} onClick={() => changeLanguage('en')} />
      <IT title="Italiano" style={(language === 'it') ? selectedIconStyle : iconStyle} onClick={() => changeLanguage('it')} />
    </>
  );
};

export default SelectLanguage;