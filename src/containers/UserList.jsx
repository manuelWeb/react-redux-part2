import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectUser } from '../actions/index'

class UserList extends Component {

  render() {
    return (
      <ul className="col-sm">
        {
          this.props.myUsers.map(user => {
            return (
              <li className="list-group-item" key={user.id}
                // onClick={() => this.props.selectUser(user)}
                onClick={this.props.selectUser.bind(this, user)}
              >
                {user.name}
              </li>
            )
          })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    myUsers: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);