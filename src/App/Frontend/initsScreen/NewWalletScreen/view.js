import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import BtnBack from '../../Components/BtnBack'
import './styles.css'

export default class NewWalletScreen extends Component {
  render () {
    return (
      <div className="window">
        <div className="window-content">
          <BtnBack title="Language Selection" leftAction={() => this.props.leftAction(this)}/>
          <div className="group-Buttons-new">
            <Button className="btn-Inits-Screen btn-Inits-Size"
              onClick={() => this.props.gotoCreateNewScreen(this)}
            >Create New Wallet</Button>
            <Button className="btn-Inits-Screen margin-left-35 btn-Inits-Size"
              onClick={() => this.props.gotoRestoreScreen(this)}
            >Restore Wallet</Button>
          </div>
          <div className="txt-version">HB Wallet for Desktop ver 1.0.0 </div>
        </div>
      </div>
    )
  }
}
