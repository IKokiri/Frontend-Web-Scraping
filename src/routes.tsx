import React from 'react';
import { Route } from 'react-router-dom';
import Base from './modules/base/base';
import Login from './modules/login/logins';

export function MainRoutes(): JSX.Element {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/admin">
        <Base />
      </Route>
    </>
  );
}

export function AdminRoutes(): JSX.Element {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/admin">
        <Base />
      </Route>
    </>
  );
}
