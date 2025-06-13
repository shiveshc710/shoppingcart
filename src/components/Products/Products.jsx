import React, { useState, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function Products() {
  const products = useSelector((state) => state.item.items);
  const [disableBoolean, setDisableBoolean] = useState(
    Array.from({ length: products.length }).fill(false)
  );
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const newBool = disableBoolean.map((current, idx) => {
      const currItem = cartItems.find((cartItem, _) => cartItem.id === idx);
      if (currItem) {
        return true;
      }
      return current;
    });

    setDisableBoolean(newBool);
  }, []);

  const handleClick = (item) => {
    let currItem = null;
    currItem = cartItems.find((cartItem, _) => cartItem === item);

    if (currItem === undefined) {
      const newBool = disableBoolean.map((current, idx) => {
        if (idx === item.id) {
          return true;
        }
        return current;
      });

      setDisableBoolean(newBool);
      dispatch(addToCart(item));
    }
  };

  return (
    <>
      <div className="products-container">
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Products
        </h1>

        {products.map((item, idx) => (
          <div key={idx} className="product-card">
            <span>
              {" "}
              <img className="product-image" src={item.image} />{" "}
            </span>
            <div className="price-container">
              <span className="item-name">{item.name}</span>
              <span className="price">${item.price}</span>
            </div>
            <div className="addCart-container">
              <input
                className={
                  !disableBoolean[item.id]
                    ? "addCart-button"
                    : "addCart-button disable"
                }
                value="Add To Cart"
                disabled={disableBoolean[item.id]}
                type="button"
                onClick={() => handleClick(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
