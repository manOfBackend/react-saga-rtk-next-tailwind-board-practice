import React from 'react';
import { GlobalStyle, theme } from '@src/App.style';
import { wrapper } from '@src/configureStore';
import { GlobalPortal } from '@src/GlobalPortal';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalPortal.Provider>
        <GlobalStyle />
        <Component {...pageProps} />;
      </GlobalPortal.Provider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
