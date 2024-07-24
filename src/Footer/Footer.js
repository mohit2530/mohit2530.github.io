import { Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem" sx={{ textAlign: 'center' }}>
      <Typography variant="caption"> All Rights Reserved. @2023</Typography>
    </Stack>
  );
}
