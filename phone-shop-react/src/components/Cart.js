import React, { Component } from "react";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    let { Cart, addToCart, removeFromCart, decreaseQuantity } = this.props;
    return (
      <div className="cart">
        <h3>Giỏ hàng</h3>
        <div className="cart-list">
          <div className="cart-item">
            {Cart.map((item, index) => {
              return (
                <table>
                  <thead>
                    <tr>
                      <td>Mã SP</td>
                      <td>{item.product.maSP}</td>
                    </tr>
                    <tr>
                      <td>Hình ảnh</td>
                      <td>
                        <img
                          src={item.product.hinhAnh}
                          width={50}
                          height={50}
                          alt="iPhone"
                        ></img>
                      </td>
                    </tr>
                    <tr>
                      <td>Giá</td>
                      <td>${item.product.gia}</td>
                    </tr>
                    <tr>
                      <td>Số lượng</td>
                      <td>{item["quantity"]}</td>
                    </tr>
                    <button
                      onClick={() => {
                        decreaseQuantity(item.product);
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        removeFromCart(item.product);
                      }}
                    >
                      Xóa
                    </button>
                    <button
                      onClick={() => {
                        addToCart(item.product);
                      }}
                    >
                      +
                    </button>
                    <tr>
                      <td>Thành tiền</td>
                      <td>${item.product.gia * item["quantity"]}</td>
                    </tr>
                  </thead>
                </table>
              );
            })}
          </div>
          <button onClick={this.props.toggleCart}>Đóng</button>
        </div>
      </div>
    );
  }
}
