import { takeLatest } from 'redux-saga/effects'
import key from '../../ReduxUtils/constants'
import { fetchTotalBalance } from './sagaFetchActions'

export default function * rootSaga () {
  yield takeLatest(key.GET_TOTAL_BALANCE, fetchTotalBalance)
  // yield takeLatest(key.GET_CARD_BALANCE, fetchCardBalance)
}
