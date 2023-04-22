import '../styles/globals.css'
import React, { useEffect } from 'react'
import SuperTokensReact, { SuperTokensWrapper, redirectToAuth} from 'supertokens-auth-react'
import * as SuperTokensConfig from '../config/frontendConfig'
import Session from 'supertokens-auth-react/recipe/session'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import If from '../components/If';
import Footer from '../components/Footer';

if (typeof window !== 'undefined') {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

export default function MyApp({ Component, pageProps }): JSX.Element {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === 'needs-refresh') {
        if (await Session.attemptRefreshingSession()) {
          location.reload()
        } else {
          // user has been logged out
          redirectToAuth()
        }
      }
    }
    doRefresh()
  }, [pageProps.fromSupertokens]);

  if (pageProps.fromSupertokens === 'needs-refresh') {
    let returnNull: JSX.Element = React.createElement('span');
    return returnNull;
  }
  
  return (
    <SuperTokensWrapper>
      <If condition={!pageProps.userId}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center">
            <div>
              <h1>Your OTP Code</h1>
              <ul>
                <li>
                  <Link href="https://patient-portal-tan.vercel.app/api/staticdata" target="_blank">View Code</Link>
                </li>
              </ul>
            </div>
        </Box>  
      </If>

      <Component {...pageProps} />

      <Footer />
    </SuperTokensWrapper>
  )
}
