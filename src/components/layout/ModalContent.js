import React from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";
import CartItem from "../CartItem";

function ModalContent() {
  const { shoppingCart, emptyShoppingCart, cartTotal } = useShoppingCart();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", top: "0px" }}>
        <h1
          style={{
            backgroundColor: "rgba(250, 5, 35, .7)",

            width: "54vw",
            textAlign: "center",
            color: "#05FADC",
            textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
        >
          YOUR CART
        </h1>
        <hr></hr>
      </div>

      <div
        style={{ marginTop: "50px", marginBottom: "50px", borderRadius: "2px" }}
      >
        {shoppingCart.map((item) => (
          <div>
            <CartItem
              cartItem={{
                id: item.id,
                title: item.title,
                image: item.image,
                quantity: item.quantity,
                price: item.price,
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ position: "fixed", bottom: "0px", marginTop: "25px" }}>
        <h1
          style={{
            borderRadius: "2px",
            marginTop: "25px",
            backgroundColor: " #05FADC ",
            height: "5vh",
            width: "95vw",
            textAlign: "center",
            color: "rgba(250, 5, 35, .7)",
            textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
        >
          Total:$ {cartTotal / 100}
        </h1>
      </div>
    </div>
  );
}

export default ModalContent;
