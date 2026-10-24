import { CssBaseline, Divider } from '@mui/material';
import NavBar from './Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import MainContent from './HeroContent/MainContent';
import BodyContent from './HeroContent/BodyContent';
import Projects from './HeroContent/Projects';
import Connect from './Contact/Connect';
import ContactForm from './Contact/ContactForm';
import Footer from './Footer/Footer';

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
      <ContactForm />
      <Connect />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
