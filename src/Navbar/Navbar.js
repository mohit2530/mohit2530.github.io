
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

function NavBar({ currentTheme, handleTheme }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: '64px',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Mohit Paudyal
            </Typography>
          </Box>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton
              size="small"
              onClick={handleTheme}
              aria-label="Toggle light and dark mode"
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                width: 36,
                height: 36,
              }}
            >
              {currentTheme ? (
                <DarkModeRounded fontSize="small" />
              ) : (
                <LightModeRounded fontSize="small" />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
