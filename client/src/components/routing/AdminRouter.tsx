import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type AdminRouterProps = {
  children?: JSX.Element;
  isSeller: boolean;
  redirectPath?: string;
};

export default function AdminRouter({
  children,
  isSeller,
  redirectPath = '/',
}: AdminRouterProps): JSX.Element {
  if (isSeller) return children || <Outlet />;
  return <Navigate to={redirectPath} />;
}
