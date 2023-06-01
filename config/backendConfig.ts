import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Passwordless from 'supertokens-node/recipe/passwordless';
import UserMetadata from "supertokens-node/recipe/usermetadata";

import DashboardNode from 'supertokens-node/recipe/dashboard';
import SessionNode from 'supertokens-node/recipe/session';
import { AuthConfig } from '../interfaces';
import { writeOtp } from '../utils/utils';
import { appInfo } from './appInfo';

async function addEmailToAllowlist(email: string) {
  let existingData = await UserMetadata.getUserMetadata("emailAllowList");
  let allowList: string[] = existingData.metadata.allowList || [];
  allowList = [...allowList, email];
  await UserMetadata.updateUserMetadata("emailAllowList", {
    allowList
  });
}

async function isEmailAllowed(email: string) {
  let existingData = await UserMetadata.getUserMetadata("emailAllowList");
  let allowList: string[] = existingData.metadata.allowList || [];
  return allowList.includes(email);
}

async function addPhoneNumberToAllowlist(phoneNumber: string) {
  let existingData = await UserMetadata.getUserMetadata("phoneNumberAllowList");
  let allowList: string[] = existingData.metadata.allowList || [];
  allowList = [...allowList, phoneNumber];
  await UserMetadata.updateUserMetadata("phoneNumberAllowList", {
    allowList
  });
}

async function isPhoneNumberAllowed(phoneNumber: string) {
  let existingData = await UserMetadata.getUserMetadata("phoneNumberAllowList");
  let allowList: string[] = existingData.metadata.allowList || [];
  return allowList.includes(phoneNumber);
}

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
        contactMethod: "EMAIL_OR_PHONE",
        flowType: "USER_INPUT_CODE",
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
                writeOtp({ otp: userInputCode });
              }
            }
          }
        },
        override: {
          apis: (oI) => {
            return {
              ...oI,
              createCodePOST: async function (input) {
                if (oI.createCodePOST === undefined) {
                  throw new Error("Should never come here");
                }

                if ("email" in input) {
                  let existingUser = await Passwordless.getUserByEmail({
                    email: input.email
                  });

                  if (existingUser === undefined) {
                    let existingData = await UserMetadata.getUserMetadata("emailAllowList");
                    let allowList: string[] = existingData.metadata.allowList || [];
                    if (allowList.length === 0) {
                      await addEmailToAllowlist(input.email);
                    } else {
                      // this is sign up attempt
                      if (!(await isEmailAllowed(input.email))) {
                        return {
                          status: "GENERAL_ERROR",
                          message: "Your email address is not present. Please contact the admin."
                        }
                      }
                    }
                  }
                } else {
                  let existingUser = await Passwordless.getUserByPhoneNumber({
                    phoneNumber: input.phoneNumber
                  });

                  if (existingUser === undefined) {
                    let existingData = await UserMetadata.getUserMetadata("phoneNumberAllowList");
                    let allowList: string[] = existingData.metadata.allowList || [];

                    if (allowList.length === 0) {
                      await addPhoneNumberToAllowlist(input.phoneNumber);
                    } else {
                      // this is sign up attempt
                      if (!(await isPhoneNumberAllowed(input.phoneNumber))) {
                        return {
                          status: "GENERAL_ERROR",
                          message: "Your phone number is not present. Please contact the admin."
                        }
                      }
                    }
                  }

                  /*                        
                  let session = await SessionNode.getSession(input.options.req, input.options.res, {
                    overrideGlobalClaimValidators: () => [],
                  });

                  if (session === undefined) {
                      throw new Error("Should never come here");
                  }
 
                  let phoneNumber: string = session.getAccessTokenPayload().phoneNumber;
 
                  if (!("phoneNumber" in input) || input.phoneNumber !== phoneNumber) {
                      throw new Error("Should never come here");
                  } 
                  */
                }

                return await oI.createCodePOST!(input);
              },
              consumeCodePOST: async function (input) {
                if (oI.consumeCodePOST === undefined) {
                  throw new Error("Should never come here");
                }

                /*
                // we should already have a session here since this is called
                // after phone password login
                let session = await SessionNode.getSession(input.options.req, input.options.res, {
                    overrideGlobalClaimValidators: () => [],
                });
                
                if (session === undefined) {
                    throw new Error("Should never come here");
                }

                // we add the session to the user context so that the createNewSession
                // function doesn't create a new session
                input.userContext.session = session;
                */
                let resp = await oI.consumeCodePOST(input);

                /*
                if (resp.status === "OK") {
                    // OTP verification was successful. We can now mark the
                    // session's payload as PhoneVerifiedClaim: true so that
                    // the user has access to API routes and the frontend UI
                    await session.setClaimValue(PhoneVerifiedClaim, true, input.userContext);
                }
                */

                return resp;
              },
            }
          }
        }
      }),
      EmailPassword.init({
        emailDelivery: {
          /*
          override: (oI) => {
              return {
                  ...oI,
                  sendEmail: async function (input) {
                      if (input.type === "PASSWORD_RESET") {
                          // TODO: send SMS to user.email (it is actually a phone number)
                          console.log("Send password reset link to: ", input.user.email);
                          console.log("Password reset  link:", input.passwordResetLink);
                      } else {
                          return oI.sendEmail(input);
                      }
                  },
              };
          },
          */
        },
        signUpFeature: {
          /*
          formFields: [
              {
                  id: "email",
                  validate: async (value) => {
                      if (typeof value !== "string") {
                          return "Phone number is invalid";
                      }

                      let parsedPhoneNumber = parsePhoneNumber(value);
                      if (parsedPhoneNumber === undefined || !parsedPhoneNumber.isValid()) {
                          return "Phone number is invalid";
                      }
                      return undefined;
                  },
              },
          ],
          */
        },
        override: {
          /*
            apis: (oI) => ({
                ...oI,
                signUpPOST(input, ...rest) {
                    if (oI.signUpPOST === undefined) {
                        throw new Error("Should never come here");
                    }

                    // We format the phone number here to get it to a standard format
                    const emailField = input.formFields.find((field) => field.id === "email");
                    if (emailField) {
                        const phoneNumber = parsePhoneNumber(emailField.value);
                        if (phoneNumber !== undefined && phoneNumber.isValid()) {
                            emailField.value = phoneNumber.number;
                        }
                    }

                    return oI.signUpPOST(input, ...rest);
                },
                signInPOST(input, ...rest) {
                    if (oI.signInPOST === undefined) {
                        throw new Error("Should never come here");
                    }

                    // We format the phone number here to get it to a standard format
                    const emailField = input.formFields.find((field) => field.id === "email");
                    if (emailField) {
                        const phoneNumber = parsePhoneNumber(emailField.value);
                        if (phoneNumber !== undefined && phoneNumber.isValid()) {
                            emailField.value = phoneNumber.number;
                        }
                    }

                    return oI.signInPOST(input, ...rest);
                },
            }),
          */
        },
      }),
      SessionNode.init({
        override: {
          /*
          functions: (oI) => {
              return {
                  ...oI,
                  getGlobalClaimValidators: (input) => [
                      ...input.claimValidatorsAddedByOtherRecipes,
                      PhoneVerifiedClaim.validators.hasValue(true),
                  ],
                  createNewSession: async function (input) {
                      if (input.userContext.session !== undefined) {
                          // if it comes here, it means that we already have an
                          // existing session
                          return input.userContext.session;
                      } else {
                          // this is via phone number and password login. The user
                          // still needs to verify the phone number via an OTP

                          // we also get the phone number of the user and save it in the
                          // session so that the OTP can be sent to it directly
                          let userInfo = await EmailPassword.getUserById(input.userId, input.userContext);
                          return oI.createNewSession({
                              ...input,
                              accessTokenPayload: {
                                  ...input.accessTokenPayload,
                                  ...PhoneVerifiedClaim.build(input.userId, input.userContext),
                                  phoneNumber: userInfo?.email,
                              },
                          });
                      }
                  },
              };
          },
          */
        },
      }),
      DashboardNode.init(),
      UserMetadata.init(),
    ],
    isInServerlessEnv: true,
  }
}