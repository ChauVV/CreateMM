
import { checkStore } from '../ReduxUtils/reducerConfig'
import { KEYSTORE } from '@/globalConstants'
import key from '../ReduxUtils/constants'

export function setCounter (couter) {
  checkStore(couter, KEYSTORE.COUNTER)
  return {
    type: 'COUNTER',
    payload: couter
  }
}

// SET DATA for Card Wallet
export function setCard (card) {
  checkStore(card, KEYSTORE.CARD_DATA)
  return {
    type: key.SET_CARD,
    payload: card
  }
}

// SET DATA for Currency
export function setCurrency (currency) {
  checkStore(currency, KEYSTORE.CURRENCY)
  return {
    type: key.SET_CURRENCY,
    payload: currency
  }
}
