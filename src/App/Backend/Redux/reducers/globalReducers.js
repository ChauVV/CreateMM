
import createReducer from '../ReduxUtils/reducerConfig'
import key from '../ReduxUtils/constants'
import init from '../ReduxUtils/initState'

export const counter = createReducer(0, {
  'COUNTER' (state, action) {
    return action.payload
  }
})

// SET REDUCER for Card Wallet
export const cardData = createReducer(init.cardInit, {
  [key.SET_CARD] (state, action) {
    return action.payload
  }
})

// SET REDUCER for Currency
export const currencyData = createReducer(init.currencyInit, {
  [key.SET_CURRENCY] (state, action) {
    return action.payload
  }
})
