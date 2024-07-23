import { Avatar, Button, Stack, Typography } from '@mui/material';

export default function BodyContent() {
  return (
    <Stack justifyContent="center" alignItems="center" spacing="2rem">
      <Stack direction="row" spacing="10rem" sx={{ py: '1rem' }}>
        <Stack justifyContent="center" alignItems="center">
          <Avatar sx={{ width: '10rem', height: '10rem' }} alt="" />
        </Stack>
        <Stack>
          <Typography variant="h3" gutterBottom>
            Who am I
          </Typography>
          <Typography variant="body1" maxWidth="40rem" gutterBottom>
            A software engineer with a diverse skill set spanning front-end and back-end development. With expertise in
            Java, Python, Go, and various web technologies including React, Vue.js, and Angular, I build dynamic and
            responsive applications with experience in microservices architecture, RESTful API development, and database
            programming with PostgreSQL, MongoDB, and Cassandra. Proficient in cloud services (AWS), CI/CD pipelines
            (Circle CI), and modern development tools like Git, Docker, and Kubernetes. Follow agile methodologies and
            test-driven development ensures high-quality, reliable software solutions for customers.
          </Typography>
          <Stack>
            <Typography variant="h3" gutterBottom>
              Top Skills 📝
            </Typography>
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
