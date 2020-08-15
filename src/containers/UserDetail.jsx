import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserDetail extends Component {
  render() {
    const { myActiveUser, myActiveDev } = this.props
    if (!myActiveUser) {
      return <div className="col-sm">Selectionne un user ou un dev pour démarrer</div>
    }
    return (
      <div className="col-sm">
        <h3>User: {myActiveUser.name}</h3>
        <ul>
          <li>Id: {myActiveUser.id}</li>
          <li>Role: {myActiveUser.role}</li>
          <li>Actif: {myActiveUser.active}</li>
        </ul>
        {myActiveDev && (
          <>
            <h3>Dev: {myActiveDev && myActiveDev.name}</h3>
            <ul>
              <li>Id: {myActiveDev.id}</li>
              <li>Language: {myActiveDev.lang.join(', ')}.</li>
              <li>Library: {myActiveDev.lib}</li>
            </ul>
          </>
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myActiveUser: state.activeUser,
    myActiveDev: state.activeDev
  }
}

export default connect(mapStateToProps)(UserDetail);