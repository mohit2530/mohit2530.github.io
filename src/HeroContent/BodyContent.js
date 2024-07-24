import { AutoAwesome } from '@mui/icons-material';
import { Avatar, Button, Stack, Typography } from '@mui/material';

export default function BodyContent() {
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center', my: 20 }}>
      <Stack sx={{ py: '1rem', flexDirection: { sm: 'column', lg: 'row' }, gap: { sm: '1rem', lg: '10rem' } }}>
        <Stack justifyContent="center" alignItems="center">
          <Avatar sx={{ width: '20rem', height: '20rem' }} alt="" src="/mohit-profile.jpg" />
        </Stack>
        <Stack sx={{ px: '1rem' }}>
          <Typography variant="body1" maxWidth="40rem" gutterBottom>
            I am a software engineer with a diverse skill set spanning front-end and back-end development. I build
            dynamic and responsive applications. I focus on high-quality, reliable software solutions for customers.
          </Typography>
          <Stack justifyContent="center" alignItems="center" spacing="2rem">
            <Stack alignItems="center" sx={{ py: 1, flexDirection: 'row', gap: '1rem'}}>
              <AutoAwesome />
              <Typography variant="h3">
                Top Skills
              </Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing="1rem">
              {['Java', 'GoLang', 'React', 'Docker', 'AWS', 'Git', 'Apache Kafka'].map((v) => (
                <Button disableRipple disableFocusRipple disableTouchRipple variant="outlined" key={v}>
                  {v}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
