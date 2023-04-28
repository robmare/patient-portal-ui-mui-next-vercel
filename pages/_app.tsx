import '../styles/globals.css'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import SuperTokensReact, { SuperTokensWrapper, redirectToAuth} from 'supertokens-auth-react'
import * as SuperTokensConfig from '../config/frontendConfig'
import Session from 'supertokens-auth-react/recipe/session'
import { Container } from '@mui/material';
import StickyFooter from '../components/Footer';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Logo from '../components/Logo';
import { appInfo } from '../config/appInfo';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

if (typeof window !== 'undefined') {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === 'needs-refresh') {
        if (await Session.attemptRefreshingSession()) {
          location.reload()
        } else {
          // user has been logged out
          // redirectToAuth()
          router.push(appInfo.websiteDomain + 'login');
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
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Patient Portal</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container style={{
              maxWidth: "100%",
              padding: "0",
              margin: "0",
          }}>
            <Logo />

            <SuperTokensWrapper>
              <Component {...pageProps} 
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  padding: "0",
                  margin: "0",
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: "center",
                }} />
            </SuperTokensWrapper>
           
            <StickyFooter />
          </Container>
      </ThemeProvider>
    </CacheProvider>
  )
}
