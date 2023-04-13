import Passwordless from 'supertokens-auth-react/recipe/passwordless'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'
import Router from 'next/router'

export let frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      Passwordless.init({
        contactMethod: "PHONE"
      }),
      SessionReact.init(),
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
      }
    },
  }
}
