import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserDetail extends Component {
  render() {
    const { myActiveUser } = this.props
    if (!myActiveUser) {
      return <div className="col-sm">Selectionne un user pour démarrer</div>
    }
    return (
      <div className="col-sm">
        <h3>User: {myActiveUser.name}</h3>
        <ul>
          <li>Id: {myActiveUser.id}</li>
          <li>Role: {myActiveUser.role}</li>
          <li>Actif: {myActiveUser.active}</li>
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myActiveUser: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);