import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouterProps = {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectPath?: string;
};

export default function RegRouter({
  children,
  isAllowed,
  redirectPath = '/auth/registration',
}: PrivateRouterProps): JSX.Element {
  if (isAllowed) return <Navigate to={redirectPath} />;
  return children || <Outlet />;
}
