import React from 'react';
import { Route } from 'react-router-dom';
import Base from './modules/base/Base';
import EditProduct from './modules/EditProduct/EditProduct';
import Login from './modules/login/logins';
import Products from './modules/products/Products';

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
      <Route exact path="/admin/product">
        <Products />
      </Route>
      <Route exact path="/admin/product/edit/:id">
        <EditProduct />
      </Route>
    </>
  );
}
