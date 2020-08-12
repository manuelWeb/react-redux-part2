import React, { Component } from 'react';

import '../style/style.scss'

import UserList from '../containers/UserList'
import UserDetail from '../containers/UserDetail';
import DevList from '../containers/DevList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <UserList />
          <UserDetail />
        </div>
        <div className="row">
          <DevList />
        </div>
      </div>
    );
  }
}

export default (App)