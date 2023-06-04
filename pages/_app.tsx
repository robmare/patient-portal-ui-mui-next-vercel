import { CacheProvider, EmotionCache } from '@emotion/react';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';
import * as SuperTokensConfig from '../config/frontendConfig';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import '../styles/globals.css';

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

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Patient Portal</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{
          maxWidth: "100%",
          padding: "0",
          margin: "0",
        }}>
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
            <Analytics />
          </SuperTokensWrapper>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  )
}
