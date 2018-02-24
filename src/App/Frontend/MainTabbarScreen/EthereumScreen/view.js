import React from 'react'
import './styles.css'
import { HBCRYPTO } from '@/globalConstants'
import { convertWeiToBalance } from '@/globalFunctions'

export default class EthereumScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = ({
      value: ''
    })
  }

  componentWillMount () {
    this.props.createNewWallet(this)
  }

  render () {
    const { cardData } = this.props

    return (
      <div className="container-display">
        <div className="e-container-center">
          <div className="e-center-top">
            <div className="e-header">
              <div className="e-header-title">Accounts Overview</div>
              <div className="e-eth-amout">
                <div className="e-h20">ETH</div>
                <div className="e-h20">0</div>
                <div className="e-h14-bold">US$0</div>
              </div>
            </div>
            <div className="e-sub-header">
              <div className="e-h22">My Ethereum Account</div>
              <div className="e-h36">+</div>
            </div>
          </div>
          <div className="e-center-bottom">
            <div className="e-table">
              {cardData.map((card, i) => this.renderCard(card, i))}
            </div>
          </div>
        </div>
        <div className="e-container-right">
          <button className="btn-clear-close" onClick={() => this.props.clearDatabase(this)}>Remove data</button>
          <textarea className="test-input" id='myInput' value={this.state.value}/>
          <button className="btn-clear-close" onClick={(e) => {
            var copyText = document.getElementById('myInput')
            copyText.select()
            document.execCommand('Copy')
          }}>Copy data</button>
        </div>
      </div>
    )
  }

  /**
   * Render card
   * @param {*} card
   * @param {*} i
   */
  renderCard (card, i) {
    return (
      <div className="e-card" key={i}>
        <img className="e-img-card" src={require('*/images/cards/card-1.png')} />
        <div className="e-card-content">
          <p className="e-card-name">{card.cardName}</p>
          <p className="e-card-name e-card-value-gray ">{convertWeiToBalance(card.totalBalance)} {HBCRYPTO.ETHEREUM_SHORT_NAME.toLowerCase()}</p>
          <p className="e-card-name e-card-value-gray ">{card.address.substring(0, 9)}</p>
        </div>
      </div>
    )
  }
}
