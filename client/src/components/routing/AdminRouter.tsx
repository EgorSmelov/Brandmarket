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
  if (isSeller) return <Navigate to={redirectPath} />;
  return children || <Outlet />;
}
