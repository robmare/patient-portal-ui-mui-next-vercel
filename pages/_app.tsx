import '../styles/globals.css'
import React from 'react'
import { useEffect } from 'react'
import SuperTokensReact, {
  SuperTokensWrapper,
  redirectToAuth,
} from 'supertokens-auth-react'
import * as SuperTokensConfig from '../config/frontendConfig'
import Session from 'supertokens-auth-react/recipe/session'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

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
    return null
  }

  return (
    <SuperTokensWrapper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
          <div>
            <h1>Your OTP Code</h1>
            <ul>
              <li>
                <Link href="http://localhost:3000/api/staticdata" target="_blank">View Code</Link>
              </li>
            </ul>
          </div>
      </Box>
      <Component {...pageProps} />
    </SuperTokensWrapper>
  )
}
