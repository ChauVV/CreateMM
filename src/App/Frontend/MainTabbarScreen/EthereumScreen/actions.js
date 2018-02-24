import EthLibrary from '#/HBLibrary/EthLibrary'
import { setCard } from '#/Redux/actions/globalActions'
import { getTotalBalance } from '../../../Backend/Redux/actions/actionSaga/sagaActions'

// clear data for dev
import store from '../../../Backend/DatabaseLib/electronJsonStorageSync'

/**
* NAME: createNewWallet
* PARAMS: mnemonic
* Create/Restore new wallet
*/
export const createNewWallet = (_this) => {
  return (dispatch, getState) => {
    const { cardData } = getState()
    const { strMnemonic } = _this.props.match.params
    if (cardData.length === 0) {
      setTimeout(async () => {
        let mnemo = strMnemonic === 'null' ? '' : strMnemonic
        var newWallet = await EthLibrary.generateWallet(mnemo, 0)
        cardData.push({
          key: 0,
          address: newWallet.currentReceiveAddress,
          mnemonic: newWallet.mnemonic,
          privateKey: newWallet.privatekey,
          cardName: 'MainAccount',
          balance: 0,
          totalBalance: 0,
          isMain: true,
          isEnable: true
        })
        // dispatch(setCard(cardData))
        // dispatch(getTotalBalance())
        console.log('address: ', newWallet.currentReceiveAddress, ' MM: ', newWallet.mnemonic)
        _this.setState({
          value: 'address: ' + newWallet.currentReceiveAddress + ' MM: ' + newWallet.mnemonic
        })
      }, 500)
    }
  }
}

export const clearDatabase = (_this) => {
  return (dispatch, getState) => {
    console.log('clearDatabase at view')
    store.clear()
    dispatch(setCard([]))
    _this.props.history.push('/newWalletScreen')
  }
}
