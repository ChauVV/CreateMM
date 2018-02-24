import key from '../../ReduxUtils/constants'
import { checkStore } from '../../ReduxUtils/reducerConfig'
import { KEYSTORE } from '@/globalConstants'

// Total balance action saga
export function getTotalBalance () {
  return {
    type: key.GET_TOTAL_BALANCE
  }
}

export function setSagaTotalBalance (totalBalance) {
  return {
    type: key.SET_SAGA_TOTAL_BALANCE,
    payload: totalBalance
  }
}
