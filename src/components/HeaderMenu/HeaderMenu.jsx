import React, { useState } from "react";
import "./HeaderMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../../redux/slices/itemSlice";

export default function HeaderMenu() {
  const [menu, setMenu] = useState(["Home", "Product List", "Shopping Cart"]);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    let currSelection = "";
    if (index === 0) {
      currSelection = "home";
    } else if (index === 1) {
      currSelection = "products";
    } else if (index === 2) {
      currSelection = "cart";
    }

    dispatch(changeMenu(currSelection));
  };

  return (
    <>
      <div className="navigation-container">
        {" "}
        {menu.map((item, idx) => {
          if (idx < menu.length - 1) {
            return (
              <>
                <span
                  className="menu-item"
                  key={idx}
                  onClick={() => handleClick(idx)}
                >
                  {item}
                </span>
                <span style={{ marginLeft: "20px" }}> | </span>
              </>
            );
          }
          return (
            <span
              className="menu-item"
              key={idx}
              onClick={() => handleClick(idx)}
            >
              {item} [{totalItems}]
            </span>
          );
        })}
      </div>
    </>
  );
}
