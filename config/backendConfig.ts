import Passwordless from 'supertokens-node/recipe/passwordless'
import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'
import { AuthConfig } from '../interfaces'
import DashboardNode from 'supertokens-node/recipe/dashboard'
import { updateJSONFile } from '../utils/utils';

export let backendConfig = (): AuthConfig => {
  return {
    framework: 'express',
    supertokens: {
      connectionURI: "https://dev-4b4aa481cf3611edbcbcef729c6d93c1-eu-west-1.aws.supertokens.io:3567",
      apiKey: "z==mL=6njtGVWcZpVpIOclGAtLRi-v",
    },
    appInfo,
    recipeList: [
      Passwordless.init({
        contactMethod: "PHONE",
        flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
        smsDelivery: {
          override: (originalImplementation) => {
                  return {
                      ...originalImplementation,
                      sendSms: async function ({
                          codeLifetime, // amount of time the code is alive for (in MS)
                          phoneNumber,
                          urlWithLinkCode, // magic link
                          userInputCode, // OTP
                      }) {
                        updateJSONFile('otp.json', { otp: userInputCode });
                      }
                  }
              }
          },
      }),
      SessionNode.init(),
      DashboardNode.init(),
    ],
    isInServerlessEnv: true,
  }
}