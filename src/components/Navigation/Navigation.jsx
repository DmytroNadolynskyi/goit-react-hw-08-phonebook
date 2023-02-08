import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Button, Box } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Button
          variant="outlined"
          component={NavLink}
          to="/"
          color="inherit"
          sx={{
            '&.active': {
              color: 'red',
              borderColor: '#000',
            },
          }}
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            variant="outlined"
            component={NavLink}
            to="/contacts"
            color="inherit"
            sx={{
              '&.active': {
                color: 'red',
                borderColor: '#000',
              },
            }}
          >
            Contacts
          </Button>
        )}
      </Box>
    </>
  );
};