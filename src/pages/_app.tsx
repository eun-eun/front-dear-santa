import * as React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';

import createEmotionCache from '../config/createEmotionCache';
import { GlobalStyle } from 'src/styles/global';
import 'src/styles/fontface.css';
import 'src/styles/reset.css';
import theme from '../config/theme';

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0'
          />
          <meta name='robots' content='noindex,nofollow' />
          <link rel='icon' href={`./favicon.png`} />
        </Head>

        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
