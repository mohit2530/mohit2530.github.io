import { ArrowOutward, ArrowOutwardRounded, Workspaces } from '@mui/icons-material';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';

const projects = [
  {
    id: 1,
    label: 'Stormrider JWT Application',
    language: ['Go'],
    imageUrl: './token.jpg',
    caption: 'A lightweight JWT authentication application built in Go, using the file system for storage.',
    link: 'https://github.com/mohit2530/stormrider',
    number: '01',
  },
  {
    id: 2,
    label: 'Custom Lawn Sprinkler System',
    language: ['Go', 'Python', 'Docker'],
    imageUrl: './lawn-sprinkler.jpg',
    caption: 'A home IoT watering system that adapts to real-time weather and user-defined garden needs.',
    link: 'https://github.com/mohit2530/LawnSprinklerSystem',
    number: '02',
  },
  {
    id: 3,
    label: 'Climate Inventory Management Toolkit',
    language: ['React', 'Node.js', 'Supabase', 'Docker'],
    imageUrl: './climate.png',
    caption: 'A containerized inventory management application backed by Supabase for data storage and management.',
    link: 'https://github.com/earmuff-jam/climate',
    number: '03',
  },
  {
    id: 4,
    label: 'Asset Tracker',
    language: ['Go', 'React', 'Node.js', 'Docker'],
    imageUrl: './assetalert.png',
    caption: 'A deployable asset tracking application with location-aware capabilities and tools for managing assets.',
    link: 'https://github.com/earmuff-jam/mashed',
    number: '04',
  },
];

export default function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 9, md: 14 },
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 5, md: 7 }}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Workspaces color="primary" fontSize="small" />
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.16em' }}>
                SELECTED WORK
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                fontWeight: 700,
                letterSpacing: '-0.055em',
                lineHeight: 1.1,
              }}
            >
              Things I&apos;ve built.
            </Typography>

            <Typography color="text.secondary" sx={{ maxWidth: '38rem', lineHeight: 1.8 }}>
              A selection of projects exploring software development, automation, and connected systems.
            </Typography>
          </Stack>

          <Stack divider={<Box sx={{ borderBottom: 1, borderColor: 'divider' }} />}>
            {projects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: 'minmax(0, 1.1fr) minmax(0, 1fr)',
                  },
                  gap: { xs: 3, md: 6 },
                  py: { xs: 4, md: 5 },
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: 1,
                    bgcolor: 'action.hover',
                    aspectRatio: '16 / 9',
                  }}
                >
                  <Box
                    component="img"
                    src={project.imageUrl}
                    alt={`${project.label} preview`}
                    loading="lazy"
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      '&:hover': { transform: 'scale(1.03)' },
                    }}
                  />
                </Box>

                <Stack spacing={2}>
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.12em' }}>
                    PROJECT / {project.number}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 650,
                      letterSpacing: '-0.035em',
                      lineHeight: 1.25,
                    }}
                  >
                    {project.label}
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {project.caption}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                    {project.language.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'divider',
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </Stack>

                  <Button
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    color="primary"
                    endIcon={<ArrowOutwardRounded />}
                    sx={{
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                  >
                    Explore project
                  </Button>
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box>
            <Button
              component="a"
              href="https://github.com/mohit2530"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<ArrowOutward />}
              sx={{
                borderColor: 'divider',
                color: 'text.primary',
                textTransform: 'none',
                px: 2.5,
                py: 1.2,
              }}
            >
              More on GitHub
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
