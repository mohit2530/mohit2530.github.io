import { Workspaces } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';

export default function Projects() {
  const projects = [
    {
      id: 1,
      label: 'JWT Tokens',
      language: ['Go'],
      imageUrl: './token.jpg',
      caption: 'Jwt tokens built in Go programming language with an expiry time set from client.',
      link: 'https://github.com/mohit2530/jwt-tokens',
    },
    {
      id: 2,
      label: 'Custom Lawn Sprinkler System',
      language: ['Go', 'Python', 'Docker'],
      imageUrl: './lawn-sprinkler.jpg',
      caption:
        'Small home IoT built for custom lawn sprinkler needs. Clients can repurpose to use for garden watering. Uses real time weather to keep itself updated with client needs.',
      link: 'https://github.com/mohit2530/LawnSprinklerSystem',
    },
    {
      id: 3,
      label: 'Climate Inventory Management Toolkit',
      language: ['React', 'Nodejs', 'Supabase', 'Docker'],
      imageUrl: './climate.png',
      caption:
        'Self containerized docker instance of inventory management. Uses supabase as a service to store and manipulate data.',
      link: 'https://github.com/earmuff-jam/climate',
    },
    {
      id: 4,
      label: 'Asset Tracker',
      language: ['Go', 'React', 'Nodejs', 'Docker'],
      imageUrl: './assetalert.png',
      caption:
        'Self containerized docker instance of custom asset tracker. Uses docker to deploy anywhere, anytime. In built scripts to manage assets with location tracking capabilities.',
      link: 'https://github.com/earmuff-jam/mashed',
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: '5rem' }}>
      <Stack direction="row" spacing="2rem" alignItems="center">
        <Workspaces />
        <Stack>
          <Typography variant="h3">Projects</Typography>
          <Typography variant="body1">Peek into my engineering side.</Typography>
        </Stack>
      </Stack>
      <Stack flexWrap="wrap" useFlexGap spacing="2rem" direction="row" sx={{ mt: '2rem' }}>
        {projects.map((v) => (
          <Card key={v.id} sx={{ width: '25rem' }}>
            <CardMedia sx={{ height: 140 }} image={v.imageUrl} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {v.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {v.caption}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open(v.link, '_blank', 'noopener,noreferrer')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
