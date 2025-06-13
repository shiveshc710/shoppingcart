import React, { useState } from "react";
import "./LandingPage.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Products from "../Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { changeMenu } from "../../redux/slices/itemSlice";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function LandingPage() {
  const currentMenu = useSelector((state) => state.item.currentMenu);
  const dispatch = useDispatch();

  return (
    <>
      <div className="background">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
        />
      </div>

      <HeaderMenu />

      <div className="output-area">
        {currentMenu === "home" && (
          <>
            <h1>ShivZon</h1>
            <p>
              Welcome! This is my first react project. This is a website for
              ordering items from the online e commerce store. Explore the
              options above or click Get Started button below to continue.
            </p>
            <input
              value="Get Started!"
              type="button"
              className="get-started-button"
              onClick={() => dispatch(changeMenu("products"))}
            />
          </>
        )}

        {currentMenu === "products" && <Products />}

        {currentMenu === "cart" && <ShoppingCart />}
      </div>
    </>
  );
}
