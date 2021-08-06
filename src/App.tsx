import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './modules/login/logins';
import Base from './modules/base/base';
import EditProduct from './modules/EditProduct/EditProduct';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/admin">
            <Base />
          </Route>
          <Route exact path="/admin/product/edit">
            <EditProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
