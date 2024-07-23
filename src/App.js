import { CssBaseline, Divider } from '@mui/material';
import NavBar from './Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import MainContent from './HeroContent/MainContent';
import BodyContent from './HeroContent/BodyContent';
import Projects from './HeroContent/Projects';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const handleTheme = () => setLightMode(!lightMode);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <NavBar currentTheme={lightMode} handleTheme={handleTheme} />
      <MainContent />
      <Divider />
      <BodyContent />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
