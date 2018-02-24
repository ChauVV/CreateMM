import { call, select, put } from 'redux-saga/effects'
import EtherScan from '../../../Api/services/EtherScan'
import init from '../../ReduxUtils/initState'
import { convertWeiToBalance } from '@/globalFunctions'
import * as sagaAction from './sagaActions'

export const getMultipleEthBalance = (arrEthAddress) => fetch(EtherScan.getApiMultipleEthBalance(arrEthAddress))

export const fetchTotalBalance = function * () {
  // console.log('fetchTotalBalance:... ')
  // internetAvailable().then(function () {
  //   console.log('Internet available')
  // }).catch(function () {
  //   console.log('No internet')
  // })
  try {
    // let internetData = yield select(state => state.internetData)
    let cardData = yield select(state => state.cardData)
    let arrStrCardAddress = []
    cardData.map(e => e.address !== '' && arrStrCardAddress.push(e.address))

    // // Show loading Total Balance
    // if (internetData) {
    //   yield put(sagaAction.setSagaTotalBalance(init.totalBalanceLoadingInit))
    // }
    // internetAvailable().then(function () {
    //   yield put(sagaAction.setSagaTotalBalance(init.totalBalanceLoadingInit))
    // })
    const response = yield call(getMultipleEthBalance, arrStrCardAddress)
    const result = yield response.json()
    console.log('fetchTotalBalance: ', result)
    if (result.error) {
      yield put(sagaAction.setSagaTotalBalance(init.totalBalanceInit))
    } else {
      // let currencyData = yield select(state => state.currencyData)

      let arrCryptoBalance = result.result.map((item) => convertWeiToBalance(item.balance))

      let sumTotalCryptoBalance = arrCryptoBalance.reduce((pre, cur) => pre + cur, 0)

      // let arrTotalEthBalance = getDecimalNumber(formatNumber(sumTotalCryptoBalance))[0]

      // let totalFiatBalance = yield FiatMoneyConvert.convertCrytoToMoney(HBCRYPTO.ETHEREUM, currencyData, sumTotalCryptoBalance)
      // let arrTotalFiatBalance = getDecimalNumber(formatNumber(totalFiatBalance, true))[0]

      yield put(sagaAction.setSagaTotalBalance({
        isLoadingTotalBalance: false,
        firstCrypto: sumTotalCryptoBalance,
        decimalCrypto: 0,
        firstFiat: 0,
        decimalFiat: 0
      }))
    }
  } catch (error) {
    console.log(error)
    yield put(sagaAction.setSagaTotalBalance(init.arrTotalBalanceInit))
  }
}
