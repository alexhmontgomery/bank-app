import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AccountDetail extends Component {
  render () {
    // const {accountId} = this.props.match.params

    return (
      <div className='col-md-6'>
        <div className='card'>
          <h4 className='card-title'>Account Information</h4>

          <div className='card-block'>
            <h4 className='card-title account-type'>{this.props.account.accountType}</h4>
            <h6 className='card-subtitle mb-2 text-muted'>{this.props.user.name}</h6>
            <div className='card-text'>
              <div>{this.props.user.email}</div>
              <div>{this.props.user.phone}</div>
              <div>{this.props.user.address}</div>
            </div>
            {this.props.user.accounts.map((account) => {
              return (
                <div key={account.id} onClick={() => this.props.selectAccount(account.id)}>
                  {/* <Link to={`/users/${id}/${account.id}`}>{account.accountType}</Link> */}
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
    user: state.selectedUser,
    account: state.selectedAccount
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)
