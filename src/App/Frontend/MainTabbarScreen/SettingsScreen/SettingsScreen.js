import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import SettingPinCodeScreen from './SettingPinCodeScreen/SettingPinCodeScreen'
import WalletSettingsScreen from './WalletSettingsScreen/WalletSettingsScreen'

export default class SettingsScreen extends Component {
  render () {
    return (

      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar"><Tabs/></div>
            <div className="pane padded"><AppRouter/></div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.props.history.push({ pathname: '/mainTabbar/settingsView/walletSettings' })
  }
}

const Tab = (props) => {
  return (
    <NavLink to={props.path} className="nav-group-item ">
      <span className={'icon icon-' + props.icon}></span>
      {props.label}
    </NavLink>
  )
}

const Tabs = () => {
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Navigation</h5>
      <Tab path="/mainTabbar/settingsView/walletSettings" label="Wallet Settings"/>
      <Tab path="/mainTabbar/settingsView/settingPinCode" label="Setting PIN Code" />
    </nav>
  )
}

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/mainTabbar/settingsView/walletSettings" component={WalletSettingsScreen} />
      <Route path="/mainTabbar/settingsView/settingPinCode" component={SettingPinCodeScreen} />
    </Switch>
  )
}
