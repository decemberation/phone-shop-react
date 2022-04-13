import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-title'>
            <h1>Khuyến mại hấp dẫn</h1>
        </div>
        <div className='footer-content'>
            <img src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_11.png' alt='iphone'/>
        </div>
      </div>
    )
  }
}
