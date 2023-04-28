import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';

import Session from "supertokens-auth-react/recipe/session";
import { appInfo } from './appInfo';
import Router from 'next/router';
import { PhoneVerifiedClaim } from '../claims/phoneVerifiedClaim';
import axios from 'axios';
import { redirectToAuth } from 'supertokens-auth-react';

export let frontendConfig = () => {
  return {
    appInfo,
    languageTranslations: {
      translations: {
        en: {
            EMAIL_PASSWORD_RESET_HEADER_SUBTITLE: "We will send you an SMS to reset your password",
            EMAIL_PASSWORD_EMAIL_LABEL: "Phone number",
            EMAIL_PASSWORD_RESET_SEND_BTN: "Send SMS",
            EMAIL_PASSWORD_RESET_SEND_SUCCESS: "Please check your SMS for the password recovery link. ",
            EMAIL_PASSWORD_SIGN_IN_WRONG_CREDENTIALS_ERROR: "Incorrect phone and password combination",
            EMAIL_PASSWORD_EMAIL_ALREADY_EXISTS: "This phone number already exists. Please sign in instead.",
            "This email already exists. Please sign in instead.":
                "This phone number already exists. Please sign in instead",
        },
      },
    },
    recipeList: [
        Passwordless.init({
            contactMethod: "PHONE",
            signInUpFeature: {
                // this will not show the passwordless UI unless we render it ourselves.
                disableDefaultUI: false,
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
            }
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
          signInAndUpFeature: {
              signUpForm: {
                  formFields: [
                      {
                          id: "email",
                          label: "Phone number",
                          placeholder: "Phone number",
                          validate: async (value) => {
                              // We can provide validation logic here.. but the backend
                              // checks for a valid phone number anyway
                              return undefined;
                          },
                      },
                  ],
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
