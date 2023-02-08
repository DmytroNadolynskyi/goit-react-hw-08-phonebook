import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Button, Box, TextField,Container } from '@mui/material';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    

    dispatch(logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}
      >
    <Box
      
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, width: 400 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign in
      </Button>
      </Box>
      </Container>
  );
  };