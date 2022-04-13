import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
          <div className='navbar'>
            <a href='#products'>Sản phẩm</a>
            <a href='#contacts'>Liên hệ</a>
            <a href='#home'>Trang chủ</a>
            <div className='shop-name'><a href='#products'>CyberShop</a></div>
          </div>
      </div>
    )
  }
}
