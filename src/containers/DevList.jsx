import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { devUser } from '../actions/index'


class DevList extends Component {
  render() {
    return (
      <ul className="col-sm">
        {
          this.props.myDev.map(dev => {
            return (
              <li
                className="list-group-item select" key={dev.id}
                // onClick={props.devUser.bind(this, dev)}
                onClick={() => this.props.devUser(dev)}
              >
                {/* {console.log('action | reducer?:', this.props.devUser(dev))} */}
                dev name: {dev.name}
              </li>
            )
          })}
      </ul>
    )
  }
}

function mapStateToPros(state) {
  return { myDev: state.dev }
}

function mapDispatchToPops(dispatch) {
  return bindActionCreators({ devUser: devUser }, dispatch)
}

export default connect(mapStateToPros, mapDispatchToPops)(DevList)