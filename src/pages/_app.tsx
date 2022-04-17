import React from 'react';
import { GlobalStyle, theme } from '@src/App.style';
import { SagaStore, wrapper } from '@src/configureStore';
import { GlobalPortal } from '@src/GlobalPortal';
import { NextPage } from 'next';
import App, { AppProps } from 'next/app';
import { END } from 'redux-saga';
import { ThemeProvider } from 'styled-components';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalPortal.Provider>
        <GlobalStyle />
        <Component {...pageProps} />;
      </GlobalPortal.Provider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
