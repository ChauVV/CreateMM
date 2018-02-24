import React, { Component } from 'react'
import store from '#/DatabaseLib/electronJsonStorageSync'
import { KEYSTORE } from '../../../Utils/globalConstants'
import './styles.css'

export default class SplashScreen extends Component {
  render () {
    return (
      <div className="window" >
        <div className="window-content">
          <img className="img-Background"
            src={require('*/images/buttons/imgSplashScreen.png')} />
        </div>
      </div>
    )
  }
  async componentDidMount () {
    const cardData = await store.get(KEYSTORE.CARD_DATA).data
    console.log('SplashScreen', cardData)
    setTimeout(() => {
      if (cardData && cardData.length > 0) {
        this.props.history.push('/mainTabbar/null')
      } else {
        this.props.history.push('/languageScreen')
      }
    }, 2000)
  }
}
