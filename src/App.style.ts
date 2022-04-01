import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const theme = {
  color: {
    appBackgroundColor: '#ffffff',
    primaryColor: '#fc3465',
    darkerSecondaryColor: '#ffdede',
    secondaryColor: '#fff0f0',
    tertiaryColor: '#6d6d6d',
    textColor: '#3d3d3d',
    lighterTextColor: '#959595',
    postBackgroundColor: '#f2f2f2',
    borderColor: '#cfcfcf',
    darkBorderColor: '#9f9f9f',
    tagItemColor: '#ffc1c1',
    separatorColor: '#a4a4a45b',
    yellow: '#ffe812',
    white: '#ffffff',
    blue0: '#f3f9ff',
    blue1: '#e6f2ff',
    blue2: '#c5e1ff',
    blue3: '#92c7ff',
    blue4: '#5facff',
    blue5: '#1184ff',
    blue6: '',
    blue7: '',
    blue8: '',
  },

  fontSize: {
    xxSmall: '1.2rem',
    xSmall: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
  },

  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    animation: fadeIn 1s forwards;
    background: ${({ theme: any }) => theme.color.appBackgroundColor};
  }
  @media only screen and (min-width: 1280px) {
    body {
      padding: 4.625rem 0.3125rem 0;
      width: 1280px;
      margin: 0 auto;
      margin-bottom: 100px;
    }
  }
  
  @media only screen and (min-width: 768px) and (max-width: 1280px) {
    body {
      padding: 4.625rem 0.3125rem 0;
      width: 768px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
