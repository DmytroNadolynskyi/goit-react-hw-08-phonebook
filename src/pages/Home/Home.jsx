import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block', textAlign: 'center' },
          }}
        >
            PHONEBOOK
        </Typography>
      </Container>
    </>
  );
}
