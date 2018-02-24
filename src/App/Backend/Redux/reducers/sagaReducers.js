import createReducer from '../ReduxUtils/reducerConfig'
import key from '../ReduxUtils/constants'
import init from '../ReduxUtils/initState'

export const totalBalanceData = createReducer(init.totalBalanceInit, {
  [key.SET_SAGA_TOTAL_BALANCE] (state, action) {
    return action.payload
  }
})
