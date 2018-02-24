// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'

import { store, history } from '#/Redux/configureStore'
import { checkLocalStoreToRedux } from '#/Redux/ReduxUtils/reducerConfig'
import * as actions from '#/Redux/actions/globalActions'
import init from '#/Redux/ReduxUtils/initState'

import SplashScreen from '~/initsScreen/SplashScreen'
import LanguageScreen from '~/initsScreen/LanguageScreen'
import NewWalletScreen from '~/initsScreen/NewWalletScreen'
import RestoreScreen from '~/initsScreen/RestoreScreen'
import MainTabbar from '~/MainTabbarScreen/MainTabbar'

import { KEYSTORE } from '@/globalConstants'
import '../vendor/photon/css/globalStyles.css'

const App = () => {
  // checkLocalStoreToRedux(store, KEYSTORE.COUNTER, actions.setCounter, 0)
  checkLocalStoreToRedux(store, KEYSTORE.CARD_DATA, actions.setCard, init.cardInit)

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div><AppRouter/></div>
      </ConnectedRouter>
    </Provider>
  )
}

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen}/>
      <Route path="/languageScreen" component={LanguageScreen}/>
      <Route path="/newWalletScreen" component={NewWalletScreen}/>
      <Route path="/restoreScreen" component={RestoreScreen}/>
      <Route path="/mainTabbar/:strMnemonic" component={MainTabbar}/>
    </Switch>
  )
}

export default App
