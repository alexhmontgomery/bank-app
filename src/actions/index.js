export const USER_SELECTED = 'USER_SELECTED'
export const ACCOUNT_SELECTED = 'ACCOUNT_SELECTED'
export const WITHDRAW_FUNDS = 'WITHDRAW_FUNDS'

export function selectUser (user) {
  return {
    type: USER_SELECTED,
    user: user
  }
}

export function selectAccount (account) {
  return {
    type: ACCOUNT_SELECTED,
    account: account
  }
}

export function withdrawFunds (amount) {
  return {
    type: WITHDRAW_FUNDS,
    amount: parseInt(amount, 10)
  }
}
