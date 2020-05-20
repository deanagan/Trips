import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import Trips from './components/Trip/Trips';
import { Create } from './components/Trip/Create';
import { Update } from './components/Trip/Update';
import { Delete } from './components/Trip/Delete';
import './custom.css'

// Use private route instead of route to allow
// access only via login.
import PrivateRoute from "./components/PrivateRoute";


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute path='/create' component={Create} />
        <PrivateRoute path='/trips' component={Trips} />
        <PrivateRoute path='/update/:id' component={Update} />
        <PrivateRoute path='/delete/:id' component={Delete} />
      </Layout>
    );
  }
}
