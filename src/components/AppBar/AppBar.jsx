import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavBar } from 'components/NavBar/NavBar';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar } from '@mui/material';

export const AppHeaderBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar  position="static"
      sx={{
        p: 2,
        pr: 6,
        pl: 6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <NavBar />}
          
      </AppBar>
    </>
  );
};