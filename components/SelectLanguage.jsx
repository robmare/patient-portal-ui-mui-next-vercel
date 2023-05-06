import GB from 'country-flag-icons/react/3x2/GB';
import IT from 'country-flag-icons/react/3x2/IT';
import SuperTokens from "supertokens-auth-react";

const iconStyle = {
  width: 18, marginRight: '10px', cursor: 'pointer'
}

const SelectLanguage = () => {
  function changeLanguage(code) {
    SuperTokens.changeLanguage(code);
  }

  return (
    <>
      <GB tittle="English" style={ iconStyle } onClick={() => changeLanguage('en')} />
      <IT title="Italiano" style={ iconStyle } onClick={() => changeLanguage('it')} />
    </>
  );  
};

export default SelectLanguage;