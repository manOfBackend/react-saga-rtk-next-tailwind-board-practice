import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './App.style';
import { GlobalPortal } from './GlobalPortal';
import { Routes } from './pages/Routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalPortal.Provider>
        <GlobalStyle />
        <Routes />
      </GlobalPortal.Provider>
    </ThemeProvider>
  );
};

export default App;
