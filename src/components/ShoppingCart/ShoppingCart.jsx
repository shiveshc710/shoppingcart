import React, { useState } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItemFromCart,
} from "../../redux/slices/cartSlice";

import { changeMenu } from "../../redux/slices/itemSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-container">
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Your Cart
        </h1>
        <div className="current-cart">
          {cartItems.map((items, idx) => (
            <div className="item" key={idx}>
              <div className="thumbnail-picture-container">
                {" "}
                <img className="thumbnail-picture" src={items.image} />{" "}
              </div>
              <div className="product-name">{items.name}</div>
              <div className="quantity-conatiner">
                <input
                  type="button"
                  onClick={() => dispatch(decrementQuantity(items))}
                  className="decrement-button"
                  value="-"
                />
                <span>{items.quantity}</span>
                <input
                  type="button"
                  onClick={() => dispatch(incrementQuantity(items))}
                  className="increment-button"
                  value="+"
                />
                <input
                  type="button"
                  onClick={() => dispatch(deleteItemFromCart(items))}
                  className="delete-button"
                  value="Delete"
                />
              </div>
              <div className="product-price">
                ${items.totalPrice.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
          Total Price = ${totalPrice.toFixed(2)}
        </div>
        <div className="checkout-section">
          <input
            className="product-listing-button"
            type="button"
            onClick={() => dispatch(changeMenu("products"))}
            value="Continue Shopping"
          />
          <input
            className="checkout-button"
            onClick={() => {
              alert("Coming Soon!");
            }}
            type="button"
            value="Checkout"
          />
        </div>
      </div>
    </>
  );
}
