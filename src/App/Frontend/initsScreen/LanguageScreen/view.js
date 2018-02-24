import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './styles.css'

export default class LanguageScreen extends Component {
  render () {
    return (
      <div className="window">
        <div className="window-content">
          <div className="group-Buttons-language">
            <Button className="btn-Inits-Screen btn-Inits-Size"
              onClick={() => this.props.gotoNewWalletScreen(this)}>English</Button>
            <Button className="btn-Inits-Screen margin-35 btn-Inits-Size"
              onClick={() => this.props.gotoNewWalletScreen(this)}>日本語</Button>
            <Button className="btn-Inits-Screen btn-Inits-Size"
              onClick={() => this.props.gotoNewWalletScreen(this)}>中文</Button>
          </div>
          <div className="txt-version">HB Wallet for Desktop ver 1.0.0 </div>
        </div>
      </div>
    )
  }
}
