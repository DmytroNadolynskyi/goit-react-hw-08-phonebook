import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const NavBar = () => {
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <Button
        variant="outlined"
        component={NavLink}
        to="/register"
        color="inherit"
        sx={{
          '&.active': {
            color: 'red',
            borderColor: '#000',
          },
        }}
      >
        Sign up
      </Button>
      <Button
        variant="outlined"
        component={NavLink}
        to="/login"
        color="inherit"
        sx={{
          '&.active': {
            color: 'red',
            borderColor: '#000',
          },
        }}
      >
        Sign in
      </Button>
    </Box>
  );
};