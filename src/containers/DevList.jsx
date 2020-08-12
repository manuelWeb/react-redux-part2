import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { devUser } from '../actions/index'

const DevList = (props) => {
  return (
    <ul className="col-sm">
      {
        props.myDev.map(dev => {
          return (
            <li
              className="list-group-item" key={dev.id}
            // onClick={props.devUser.bind(this, dev)}
            >
              {console.log('action | reducer?:', props.devUser(dev))}
              dev name: {dev.name}
            </li>
          )
        })}
    </ul>
  )
}

function mapStateToPros(state) {
  return {
    myDev: state.dev
  }
}

function mapDispatchToPops(dispatch) {
  return bindActionCreators({ devUser: devUser, dispatch })
}

export default connect(mapStateToPros, mapDispatchToPops)(DevList)