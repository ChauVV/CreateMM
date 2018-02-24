import React from 'react'
import { NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import EthereumScreen from '../EthereumScreen'
import ExchangesScreen from '../ExchangesScreen/ExchangesScreen'
import SettingsScreen from '../SettingsScreen/SettingsScreen'
import TokensScreen from '../TokensScreen/TokensScreen'

import './styles.css'

const ETHEREUM_PATH = '/mainTabbar/ethereumView/:strMnemonic'
const TOKENS_PATH = '/mainTabbar/tokensView'
const EXCHANGES_PATH = '/mainTabbar/exchangesView'
const SETTINGS_PATH = '/mainTabbar/settingsView'

let currentTabIndex = 0

let disableBtnLeft = true
let disableBtnRight = false
/**
 * init tabs
 * @param {*} history react rount history
 */
export const Tabs = (history) => {
  const naviBack = () => {
    disableBtnLeft = false
    disableBtnRight = false
    switch (currentTabIndex) {
    case 1:
      disableBtnLeft = true
      history.history.push(ETHEREUM_PATH)
      break
    case 2:
      history.history.push(TOKENS_PATH)
      break
    case 3:
      history.history.push(EXCHANGES_PATH)
      break
    default:
    }
    currentTabIndex--
  }
  const naviNext = () => {
    disableBtnLeft = false
    disableBtnRight = false
    switch (currentTabIndex) {
    case 0:
      history.history.push(TOKENS_PATH)
      break
    case 1:
      history.history.push(EXCHANGES_PATH)
      break
    case 2:
      disableBtnRight = true
      history.history.push(SETTINGS_PATH)
      break
    default:
    }
    currentTabIndex++
  }

  return (
    <nav className="nav-group">
      <div className="groub-nav-btns">
        <button className="btn-nav" disabled={disableBtnLeft} onClick={() => naviBack()}>
          <img className="img-nav-left" src={require('*/images/buttons/ic_nav_left_enable.png')} />
        </button>
        <button className="btn-nav" disabled={disableBtnRight} onClick={() => naviNext()}>
          <img className="img-nav-right" src={require('*/images/buttons/ic_nav_right_enable.png')} />
        </button>
      </div>
      <Tab path="/mainTabbar/ethereumView/:strMnemonic" label="Ethereum" icon="ether-active.png" index={0}/>
      <Tab path="/mainTabbar/tokensView" label="Tokens" icon="tokens-active.png" index={1}/>
      <Tab path="/mainTabbar/exchangesView" label="Exchanges" icon="exchanges-active.png" index={2}/>
      <Tab path="/mainTabbar/settingsView" label="Settings" icon="settings-active.png" index={3}/>

    </nav>
  )
}

/**
 * init single tab
 * @param {*} props : path, label, icon, index of tab
 */
const Tab = (props) => {
  return (
    <NavLink to={props.path}
      onClick={() => {
        currentTabIndex = props.index
        disableBtnLeft = false
        disableBtnRight = false
        if (currentTabIndex === 0) {
          disableBtnLeft = true
        } else if (currentTabIndex === 3) {
          disableBtnRight = true
        }
      }}
      className={'nav-group-item ' + (props.index === currentTabIndex ? 'disabled-link' : '')}
    >
      <div className="nav-items-contain">
        <div className="tab-img">
          <img src={require('*/images/navigation/' + props.icon)} />
        </div>
        <div className="text-tabbar">{props.label}</div>
      </div>
    </NavLink>
  )
}

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/mainTabbar/ethereumView/:strMnemonic" component={EthereumScreen} />
      <Route path="/mainTabbar/settingsView" component={SettingsScreen} />
      <Route path="/mainTabbar/exchangesView" component={ExchangesScreen} />
      <Route path="/mainTabbar/tokensView" component={TokensScreen} />
    </Switch>
  )
}

// export const dropdownChange = (event, _this) => {
//   _this.setState({dropdownValue: event.target.value})
// }
