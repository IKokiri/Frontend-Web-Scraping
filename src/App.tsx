import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './modules/login/logins';
import Base from './modules/base/base';
import { MainRoutes } from './routes';

function App(): JSX.Element {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;
