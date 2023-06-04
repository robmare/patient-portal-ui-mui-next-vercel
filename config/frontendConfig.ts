import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';

import Session from "supertokens-auth-react/recipe/session";
import Router from 'next/router';
import { PhoneVerifiedClaim } from '../claims/phoneVerifiedClaim';
import { appInfo } from './appInfo';
import axios from 'axios';
import translactions from '../translations/translations';
import { getLng } from '../utils/clientUtils';
import en from '../translations/en/en';

export const frontendConfig = () => {
  let locale: string = getLng();

  return {
    appInfo,
    languageTranslations: {
      translations: translactions,
      defaultLanguage: locale,
    },
    recipeList: [
        Passwordless.init({
            contactMethod: "EMAIL_OR_PHONE",
            style: `
              [data-supertokens~="container"] {
                  --palette-background: 51, 51, 51;
                  --palette-inputBackground: 41, 41, 41;
                  --palette-inputBorder: 41, 41, 41;
                  --palette-textTitle: 255, 255, 255;
                  --palette-textLabel: 255, 255, 255;
                  --palette-textPrimary: 255, 255, 255;
                  --palette-error: 173, 46, 46;
                  --palette-textInput: 169, 169, 169;
                  --palette-textLink: 169, 169, 169;
                  --palette-superTokensBrandingBackground: 51, 51, 51;
                  --palette-superTokensBrandingText: 51, 51, 51;
              }
            `,
            signInUpFeature: {
                defaultCountry: locale.toUpperCase(),
                disableDefaultUI: false,
                emailOrPhoneFormStyle: `
                    [data-supertokens~=button] {
                        background-color: #555;
                        color: inherit;
                        border: 0px;
                        width: 100%;
                        margin: 0 auto;
                    }

                    [data-supertokens~=inputWrapper][data-supertokens~="inputWrapper"]:focus-within {
                      border: 1px solid #555; 
                      box-shadow: 0 0 0 0.2rem rgba(85, 85, 85, 0.25); 
                    }
                `,
                userInputCodeFormStyle: `
                  [data-supertokens~=button] {
                    background-color: #555;
                    color: inherit;
                    border: 0px;
                    width: 100%;
                    margin: 0 auto;
                  }

                  [data-supertokens~=inputWrapper][data-supertokens~="inputWrapper"]:focus-within {
                    border: 1px solid #555; 
                    box-shadow: 0 0 0 0.2rem rgba(85, 85, 85, 0.25); 
                  }
                `
            },
            onHandleEvent: async (context) => {
              if (context.action === "PASSWORDLESS_CODE_SENT") {
                axios
                  .get(appInfo.websiteDomain + 'api/staticdata')
                  .then((response) => {
                    let json = response.data;
                    if (json.otp) alert('Your OTP code: ' + json.otp)
                    else if (json.error) alert('Error: ' + json.error)
                  })
                  .catch((err) => console.log(err));
              } else {
                if (context.action === "SUCCESS") {
                  location.href = appInfo.websiteDomain;
                }
              }
            },
            getRedirectionURL: async (context) => {
              if (context.action === "SUCCESS") {
                  return "/";
              }
              return undefined;
          },
        }),
        EmailPassword.init({
          getRedirectionURL: async (context) => {
              if (context.action === "SUCCESS") {
                  // this means that the first login challenge is done. Now we should
                  // redirect the user to the second login challenge
                  return "/auth/verify-phone";
              }
              return undefined;
          },
          style: `
              [data-supertokens~="container"] {
                  --palette-background: 51, 51, 51;
                  --palette-inputBackground: 41, 41, 41;
                  --palette-inputBorder: 41, 41, 41;
                  --palette-textTitle: 255, 255, 255;
                  --palette-textLabel: 255, 255, 255;
                  --palette-textPrimary: 255, 255, 255;
                  --palette-error: 173, 46, 46;
                  --palette-textInput: 169, 169, 169;
                  --palette-textLink: 169, 169, 169;
                  --palette-superTokensBrandingBackground: 51, 51, 51;
                  --palette-superTokensBrandingText: 51, 51, 51;
              }
          `,
          resetPasswordUsingTokenFeature: {
              disableDefaultUI: false,
              enterEmailForm: {
                style: `
                    [data-supertokens~=button] {
                        background-color: #555;
                        color: inherit;
                        border: 0px;
                        width: 100%;
                        margin: 0 auto;
                    }

                    [data-supertokens~=inputWrapper][data-supertokens~="inputWrapper"]:focus-within {
                      border: 1px solid #555; 
                      box-shadow: 0 0 0 0.2rem rgba(85, 85, 85, 0.25); 
                    }
                `,
              },
              submitNewPasswordForm: {
                style: `
                    [data-supertokens~=button] {
                        background-color: #555;
                        color: inherit;
                        border: 0px;
                        width: 100%;
                        margin: 0 auto;
                    }

                    [data-supertokens~=inputWrapper][data-supertokens~="inputWrapper"]:focus-within {
                      border: 1px solid #555; 
                      box-shadow: 0 0 0 0.2rem rgba(85, 85, 85, 0.25); 
                    }
                `,
              }
          },
          signInAndUpFeature: {
              disableDefaultUI: false,
              signInForm: {
                style: `
                    [data-supertokens~=button] {
                        background-color: #555;
                        color: inherit;
                        border: 0px;
                        width: 100%;
                        margin: 0 auto;
                    }

                    [data-supertokens~=inputWrapper][data-supertokens~="inputWrapper"]:focus-within {
                      border: 1px solid #555; 
                      box-shadow: 0 0 0 0.2rem rgba(85, 85, 85, 0.25); 
                    }
                `,
              }, 
              signUpForm: {
                  style: `
                      [data-supertokens~=button] {
                          background-color: #555;
                          color: inherit;
                          border: 0px;
                          width: 100%;
                          margin: 0 auto;
                      }

                      [data-supertokens~=inputWrapper][data-supertokens~="inputWrapper"]:focus-within {
                        border: 1px solid #555; 
                        box-shadow: 0 0 0 0.2rem rgba(85, 85, 85, 0.25); 
                      }
                  `
              },
          },
        }),
        Session.init()
    ],

    // this is so that the SDK uses the next router for navigation
    windowHandler: (oI) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href) => {
            Router.push(href);
          },
        },
        getGlobalClaimValidators: ({ claimValidatorsAddedByOtherRecipes }) => {
          return [...claimValidatorsAddedByOtherRecipes, PhoneVerifiedClaim.validators.isTrue()];
        },
      }
    },
  }
}
