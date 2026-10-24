
import { createTheme } from '@mui/material/styles';

const createPortfolioTheme = (mode) => {
  const isLight = mode === 'light';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#3F72AF',
      },
      background: {
        default: isLight ? '#FAF9F6' : '#171717',
        paper: isLight ? '#FFFFFF' : '#222222',
      },
      text: {
        primary: isLight ? '#202020' : '#F5F5F5',
        secondary: isLight ? '#686868' : '#AAAAAA',
      },
      divider: isLight ? '#E5E2DC' : '#383838',
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      h1: {
        fontFamily: 'Georgia, serif',
        fontWeight: 400,
        fontSize: 'clamp(2.75rem, 7vw, 5rem)',
        lineHeight: 1.05,
        letterSpacing: '-0.045em',
      },
      h2: {
        fontFamily: 'Georgia, serif',
        fontWeight: 400,
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        lineHeight: 1.15,
        letterSpacing: '-0.03em',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.85,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.75,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 200ms ease',
          },
          '::selection': {
            backgroundColor: isLight ? '#DCE6F2' : '#354B65',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            padding: '9px 18px',
          },
        },
      },
    },
  });
};

export const lightTheme = createPortfolioTheme('light');
export const darkTheme = createPortfolioTheme('dark');
