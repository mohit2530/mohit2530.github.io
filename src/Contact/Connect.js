import { EmailOutlined, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Container, IconButton, Stack, Tooltip, Typography } from '@mui/material';

const navLinks = [
  {
    label: 'GitHub',
    icon: <GitHub />,
    href: 'https://github.com/mohit2530',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/mohit-paudyal/',
  },
  {
    label: 'Email',
    icon: <EmailOutlined />,
    href: 'mailto:mohit.paudyal@gmail.com',
  },
];

export default function Footer() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="flex-end">
          <Typography variant="overline" sx={{ letterSpacing: '0.16em' }}>
              CONNECT
            </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            {navLinks.map(({ label, icon, href }) => (
              <Tooltip key={label} title={label}>
                <IconButton
                  component="a"
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 1,
                    width: 36,
                    height: 36,
                  }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
