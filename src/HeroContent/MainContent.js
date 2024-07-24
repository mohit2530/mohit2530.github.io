import { Button, Stack, Typography } from '@mui/material';
import ResumeLink from './resumeLink.pdf';

export default function MainContent() {
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center', my: 20 }}>
      <Typography variant="body1" sx={{ fontSize: '3rem' }}>
        👋👋 Hi. I&#39;m Mohit.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '3rem' }}>
        Love engineering functional components.
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '50%' }}>
        I am enthusiastic, adept and dedicated software engineer, passionate about working with developers and users to
        produce quality software and design. Responsible for building a comprehensive user interface with business value
        in mind.
      </Typography>
      <Stack direction="row" spacing="2rem">
        <Button variant="outlined" onClick={() => window.open(ResumeLink, '_blank', 'noopener,noreferrer')}>
          Download Resume
        </Button>
        <Button variant="contained" onClick={(e) => {
          window.location.href = 'mailto:mohit.paudyal@gmail.com';
          e.preventDefault();
        }}>Email</Button>
      </Stack>
    </Stack>
  );
}
