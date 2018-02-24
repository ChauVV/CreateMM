import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import BtnBack from '~/Components/BtnBack'
import './styles.css'

export default class RestoreScreen extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      passphrase: '',
      disabledBtnOK: true
    })
  }
  render () {
    return (
      <div className="window">
        <div className="window-content">
          <BtnBack title="New Wallet" leftAction={() => this.props.leftAction(this)}/>

          <div className="contain">
            <div className="header">Restore Wallet</div>
            <div className="txtEnter">Enter passphrase to restore wallet</div>

            <div className="textArea">
              <img className="img-key" src={require('*/images/buttons/ic_key.png')} />
              <textarea className="tarea" placeholder="Enter your passphrase ..." autoFocus
                value={this.state.passphrase}
                onChange={event => this.props.onchangeText(this, event)}
              />
            </div>
            <div className="group-Buttons">
              <Button className="btn-Inits-Screen btn-new-wallet"
                onClick={() => this.props.leftAction(this)}
              >Cancel</Button>
              <Button className="btn-Inits-Screen margin-left-121 btn-new-wallet"
                onClick={() => this.props.ok(this)}
                disabled={this.state.disabledBtnOK}
              >OK</Button>
            </div>
          </div>
          <div className="txt-version">HB Wallet for Desktop ver 1.0.0 </div>
        </div>
      </div>
    )
  }
}
