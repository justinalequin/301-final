import React from "react";
import { useShoppingCart } from "../context/shoppingCartContext";

const CartItem = (props) => {
  const { removeItem } = useShoppingCart();

  // const { increaseCartQuantity } = useShoppingCart();
  // const { decreaseCartQuantity } = useShoppingCart();

  const {
    cartItem: { id, title, image, quantity, price },
  } = props;

  return (
    <div
      style={{
        backgroundColor: "rgba(250, 5, 35, .7)",
        padding: "22px",
        marginBottom: "10px",
        borderRadius: "2px",
        color: "#05FADC",
        textShadow: "0px 0px 2px rgba(255,255,255,0.7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      }}
    >
      <h2>{title}</h2>
      <div>
        <img src={image} style={{ width: "200px", borderRadius: "2px" }}></img>
      </div>

      <div>
        <h3>Price: ${price / 100} /day</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h3>Days: {quantity}</h3>
          <div style={{}}>
            <button style={{ marginRight: "4px" }}>+</button>
            <button>-</button>
          </div>
        </div>
      </div>

      <button
        onClick={() => removeItem(id)}
        style={{
          backgroundColor: "rgba(250, 5, 35, .1)",
          border: "solid #05FADC 2px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        REMOVE RESERVATION
      </button>
    </div>
  );
};

export default CartItem;
