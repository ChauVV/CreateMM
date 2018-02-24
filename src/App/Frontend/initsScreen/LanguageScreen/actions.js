export const gotoNewWalletScreen = (THIS) => {
  return (dispatch, getState) => {
    THIS.props.history.push('/newWalletScreen')
  }
}
