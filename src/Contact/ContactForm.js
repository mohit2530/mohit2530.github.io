import { ArrowOutward } from '@mui/icons-material';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:mohit.paudyal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 9, md: 14 },
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            },
            gap: { xs: 5, md: 10 },
          }}
        >
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.16em' }}>
              GET IN TOUCH
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
              Let&apos;s work together.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: '1.05rem',
                lineHeight: 1.9,
                maxWidth: '32rem',
              }}
            >
              I&apos;m open to conversations about software engineering, interesting technical challenges, and ambitious
              projects. If you&apos;re building something meaningful or would like to collaborate, let&apos;s talk.
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                fullWidth
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                fullWidth
              />

              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                minRows={5}
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowOutward />}
                sx={{
                  alignSelf: 'flex-start',
                  px: 3,
                  py: 1.4,
                  fontWeight: 700,
                  textTransform: 'none',
                }}
              >
                Send message
              </Button>

            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
