import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class UserList extends Component {
  render () {
    return (
      <div>
        <h5 className='users-list-heading'>Users with open accounts: </h5>
        <ul>
          {this.props.users.map((user) => {
            return (
              <li key={user._id} className='list-group-item' onClick={() => this.props.selectUser(user)}>
                <Link to={`/users/${user._id}`}>{user.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectUser: selectUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
