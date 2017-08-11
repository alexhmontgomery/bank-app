import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { withdrawFunds } from '../actions/index'

class AccountDetail extends Component {
  render () {
    const userIdx = this.props.users.findIndex(user => user._id === this.props.user._id)
    const accountIdx = this.props.users[userIdx].accounts.findIndex(account => account.id === this.props.account.id)

    return (
      <div id='account-detail' className='col-md-6'>
        <div className='card'>
          <h4 className='card-title'>Account Information</h4>

          <div className='card-block'>
            <h4 className='card-title account-type'>{this.props.account.accountType}</h4>

            <h6 className='card-subtitle mb-2 text-muted'>{this.props.user.name}</h6>
            <hr />
            <div className='card-text'>
              <div>Balance: <span className='account-balance'>${this.props.users[userIdx].accounts[accountIdx].balance}</span></div>
              <hr />
            </div>
          </div>
          <button className='btn btn-danger' onClick={() => this.props.withdrawFunds(20)}>Withdraw $20</button>
          <button className='btn btn-danger' onClick={() => this.props.withdrawFunds(10)}>Withdraw $10</button>
          <button className='btn btn-danger' onClick={() => this.props.withdrawFunds(5)}>Withdraw $5</button>
          <Link className='btn btn-primary' to={`/users/${this.props.user._id}`} >Back to User Details</Link>
        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    user: state.selectedUser,
    account: state.selectedAccount
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    withdrawFunds: withdrawFunds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)
