import React from 'react'
import { Button } from 'react-bootstrap'
import './styles.css'

const btnBack = ({title, leftAction}) => {
  const leftActionHeader = (action) => action

  return (
    <Button className="btn-Back" onClick={leftActionHeader(leftAction)}>
      <img className="img-back"
        src={require('*/images/buttons/ic_nav_left_enable.png')} />
      {title}
    </Button>
  )
}

export default btnBack
