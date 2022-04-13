import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Slider />
        <ProductsList />
        <Footer />
      </div>
    )
  }
}

