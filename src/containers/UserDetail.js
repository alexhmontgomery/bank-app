import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { selectAccount } from '../actions/index'

class UserDetail extends Component {
  render () {
    const {id} = this.props.match.params

    return (
      <div className='col-md-6'>
        <div className='card'>
          <h4 className='card-title'>Account Information</h4>
          <img className='card-img-top' src={`${this.props.user.image}`} alt='user' />
          <div className='card-block'>
            <h6 className='card-subtitle mb-2 text-muted'>{this.props.user.name}</h6>
            <div className='card-text'>
              <div>{this.props.user.email}</div>
              <div>{this.props.user.phone}</div>
              <div>{this.props.user.address}</div>
            </div>
            {this.props.user.accounts.map((account) => {
              return (
                <div key={account.id} onClick={() => this.props.selectAccount(account)}>
                  <Link to={`/users/${id}/${account.id}`}>{account.accountType}</Link>
                </div>
              )
            })}
          </div>
          <Link className='btn btn-primary' to='/users' >Back to List of Users</Link>
        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.selectedUser
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectAccount: selectAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)
