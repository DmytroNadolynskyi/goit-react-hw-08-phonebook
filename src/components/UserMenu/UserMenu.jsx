import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Button, Box, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Typography component="p" sx={{ textTransform: 'none' }}>
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        variant="text"
        onClick={() => dispatch(logOut())}
        color="inherit"
      >
        Logout
      </Button>
    </Box>
  );
};
