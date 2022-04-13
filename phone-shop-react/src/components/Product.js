import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    let { product, viewDetails, toggleCart, addToCart } = this.props; //props from ProductsList.js

    return (
      <div className="card">
        <img className="card-img" src={product.hinhAnh} alt="product" />
        <h5>{product.tenSP}</h5>
        <div className="card-body">
          <p className="card-price">${product.gia}</p>
          <button
            className="view-btn"
            onClick={() => {
              viewDetails(product);
            }}
          >
            Xem sản phẩm
          </button>
          <button
            className="cart-btn"
            onClick={() => {
              toggleCart();
            }}
          >
            Xem giỏ hàng
          </button>
          <button
            className="buy-btn"
            onClick={() => {
              addToCart(product);
            }}
          >
            Mua sản phẩm
          </button>
        </div>
      </div>
    );
  }
}
