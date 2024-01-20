import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouterProps = {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectPath?: string;
};

export default function PrivateRouter({
  children,
  isAllowed,
  redirectPath = '/',
}: PrivateRouterProps): JSX.Element {
  if (isAllowed) return children || <Outlet />;
  return <Navigate to={redirectPath} />;
}
