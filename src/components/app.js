import React, { Component } from 'react';
import '../style/style.scss'

import UserList from '../containers/UserList'

export default class App extends Component {
  render() {
    return (
      <div><UserList /></div>
    );
  }
}
