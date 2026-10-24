import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';

const technicalFocus = [
  'Software Systems',
  'C++',
  'Go',
  'Embedded Systems',
  'Autonomous Systems',
  'Computer Vision',
  'Robotics',
  'React',
];

export default function BodyContent() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 9, md: 14 },
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 7, md: 10 }}>
          {/* Introduction */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'minmax(0, 1.5fr) minmax(200px, 0.7fr)',
              },
              gap: { xs: 4, md: 8 },
              alignItems: 'start',
            }}
          >
            <Stack spacing={3}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.16em' }}>
                A LITTLE ABOUT ME
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.75rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.055em',
                  lineHeight: 1.1,
                }}
              >
                Software engineer building systems that do more.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  lineHeight: 1.9,
                  maxWidth: '48rem',
                }}
              >
                I&apos;m a software engineer interested in what happens when software moves beyond the screen. I build
                applications, developer tools, and practical systems designed to solve real problems, with a focus on
                clean architecture, reliability, and thoughtful engineering.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  lineHeight: 1.9,
                  maxWidth: '48rem',
                }}
              >
                My experience spans full-stack development and backend systems. Outside the usual web stack, I&apos;m
                expanding into C++, embedded systems, robotics, and autonomous technologies. I&apos;m particularly
                interested in the intersection of software, sensors, and real-world engineering.
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
                sx={{
                  width: 'fit-content',
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 1,
                }}
              >
                Get in touch
              </Button>
            </Stack>

            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'relative',
                mt: 5,
              }}
            >
              <Box
                component="img"
                src="/mohit-profile.jpg"
                alt="Mohit"
                sx={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  borderRadius: 1,
                  filter: 'saturate(0.8)',
                }}
              />
            </Box>
          </Box>

          <Divider />

          {/* Education */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '220px minmax(0, 1fr)',
              },
              gap: { xs: 2, md: 8 },
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.14em' }}>
              EDUCATION
            </Typography>

            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={600}>
                Computer Science
              </Typography>
              <Typography color="text.secondary">Undergraduate degree</Typography>
            </Stack>
          </Box>

          {/* Technical focus */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '220px minmax(0, 1fr)',
              },
              gap: { xs: 2, md: 8 },
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.14em' }}>
              AREAS OF INTEREST
            </Typography>

            <Stack spacing={2.5}>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: '42rem' }}>
                From shipping production software to exploring lower-level systems, I&apos;m drawn to engineering
                challenges that require understanding how the whole system works.
              </Typography>

              <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                {technicalFocus.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      px: 1.5,
                      py: 0.8,
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
