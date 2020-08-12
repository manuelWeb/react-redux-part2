import React, { Component } from 'react';

import '../style/style.scss'

import UserList from '../containers/UserList'
import UserDetail from '../containers/UserDetail';
// import { connect } from 'react-redux';

// export default class App extends Component {
class App extends Component {
  render() {
    return (
      <div className="row">
        <UserList />
        <UserDetail />
        {/* <div className="selected-user">
          {console.log(this.props)}
        </div> */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     myUsers: state
//   }
// }

// export default connect(mapStateToProps)(App)
export default (App)