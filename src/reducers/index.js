// import { combineReducers } from 'redux'
import userList from '../data/users'
import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index'
import update from 'immutability-helper'

const initialState = {
  users: userList(),
  selectedUser: null,
  selectedAccount: null
}

const reducer = function (state = initialState, action) {
  if (action.type === USER_SELECTED) {
    return update(state, {
      selectedUser: {
        $set: action.user
      }})
  } else if (action.type === ACCOUNT_SELECTED) {
    return update(state, {
      selectedAccount: {
        $set: action.account
      }
    })
  } else if (action.type === WITHDRAW_FUNDS) {
    return state
  } else {
    return state
  }
}

export default reducer
