const PASSPHRASE_WORDS_LIMIT = 12

/**
 * Name: leftAction
 * @param {*} _this view.this
 * Go back pre-view
 */
export const leftAction = (_this) => {
  return (dispatch, getState) => {
    _this.props.history.goBack()
  }
}

/**
 * Name: ok
 * @param {*} _this view.this
 * Go to next view
 */
export const ok = (_this) => {
  return (dispatch, getState) => {
    _this.props.history.push(`/mainTabbar/${_this.state.passphrase}`)
  }
}

/**
 * Handle text change
 * @param {*} _this view.this
 * @param {*} event textarea text change event
 */
export const onchangeText = (_this, event) => {
  return (dispatch, getState) => {
    let value = event.target.value
    _this.setState({
      passphrase: value,
      disabledBtnOK: countWords(value) !== PASSPHRASE_WORDS_LIMIT
    })
  }
}

/**
 * Count words in a string
 * @param {*} str
 */
const countWords = (str) => {
  return str.split(' ').filter(a => a.trim().length > 0).length
}
