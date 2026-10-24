import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ResumeLink from './resumeLink.pdf';
import NetworkGraph from './NetworkGraph';

const technologies = ['React', 'JavaScript', 'Go', 'C++', 'Firebase', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'];

export default function MainContent() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: { xs: 'auto', md: 'calc(100vh - 80px)' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
          alignItems: 'center',
          gap: { xs: 5, md: 6 },
          py: { xs: 8, md: 6 },
        }}
      >
        {/* Introduction */}
        <Stack spacing={3} sx={{ maxWidth: 480, zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.2em',
            }}
          >
            SOFTWARE ENGINEER
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: 'clamp(3.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: '-0.055em',
            }}
          >
            Mohit
            <Box
              component="span"
              sx={{
                display: 'block',
                color: 'text.secondary',
                fontWeight: 400,
                letterSpacing: '-0.055em',
              }}
            >
              Paudyal
            </Box>
          </Typography>

          <Box
            sx={{
              width: 38,
              height: 2,
              bgcolor: 'primary.main',
            }}
          />

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.95rem', lineHeight: 1.85 }}>
            I&apos;m a software engineer who enjoys building useful applications, developer tools, and systems that
            solve real-world problems. I care about thoughtful design, maintainable code, and understanding how things
            co-relate with each other deeply.
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: '4px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
            <Button
              variant="contained"
              endIcon={<ArrowOutwardRoundedIcon />}
              component="a"
              href={ResumeLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 2.5,
                py: 1.2,
                fontSize: '0.75rem',
                fontWeight: 800,
              }}
            >
              Resume
            </Button>

            <Button
              variant="outlined"
              component="a"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              sx={{
                px: 2.5,
                py: 1.2,
                fontSize: '0.75rem',
                fontWeight: 800,
              }}
            >
              Contact
            </Button>
          </Stack>
        </Stack>

        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            right: { xs: 'auto', md: '25%' },
            top: { xs: 'auto', md: '50%' },
            transform: { xs: 'none', md: 'translateY(-50%)' },
            width: { xs: '100%', md: '40%' },
            display: { xs: 'none', md: 'block' },
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <NetworkGraph />
        </Box>
      </Box>
    </Container>
  );
}
