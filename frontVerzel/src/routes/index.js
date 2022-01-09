import React from 'react';
import { Switch} from 'react-router-dom';
import { Route } from 'react-router-dom'
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile';
export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Signin} />
      <Route path="/cadastro" component={Signup} />
      <Route path="/profile" component={Profile}  />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}