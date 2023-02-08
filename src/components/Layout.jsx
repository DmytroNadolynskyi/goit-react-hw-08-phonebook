import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppHeaderBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppHeaderBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};