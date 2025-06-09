import React, { useState } from "react";
import "./HeaderMenu.css";

export default function HeaderMenu() {
  const [menu, setMenu] = useState(["Home", "Product List", "Shopping Cart"]);

  return (
    <>
      <div className="navigation-container">
        {" "}
        {menu.map((item, idx) => {
          if (idx < menu.length - 1) {
            return (
              <>
                <span className="menu-item" key={idx}>
                  {item}
                </span>
                <span style={{ marginLeft: "20px" }}> | </span>
              </>
            );
          }
          return (
            <span className="menu-item" key={idx}>
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
}
