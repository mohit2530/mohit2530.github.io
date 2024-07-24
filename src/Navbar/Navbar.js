import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import { AppBar, Box, Container, IconButton, Stack, Switch, Toolbar, Typography } from '@mui/material';

function NavBar({ currentTheme, handleTheme }) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1}}>
            <Typography variant="h3">Mohit</Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack sx={{ flexDirection: 'row', spacing: '0.5rem', color: 'text.secondary', alignContent: 'center' }}>
              <Switch
                color="text.secondary"
                checked={currentTheme}
                onChange={handleTheme}
                inputProps={{ 'aria-label': 'light mode vs dark mode' }}
              />
              <IconButton disabled>{currentTheme ? <DarkModeRounded /> : <LightModeRounded />}</IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
