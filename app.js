import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
 return (
 <BrowserRouter>
 <Switch>
 <Route path="/login" component={Login} />
 <Route path="/register" component={Register} />
 <Route path="/dashboard" component={Dashboard} />
 </Switch>
 </BrowserRouter>
 );
}