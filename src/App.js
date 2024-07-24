import { CssBaseline, Divider } from '@mui/material';
import NavBar from './Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import MainContent from './HeroContent/MainContent';
import BodyContent from './HeroContent/BodyContent';
import Projects from './HeroContent/Projects';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

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
      <Divider />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
