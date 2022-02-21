import React, { useContext } from "react";
import {
  shoppingCartContext,
  useShoppingCart,
} from "../context/shoppingCartContext";

export default function ProductDisplay(props) {
  const { addItemToCart } = useShoppingCart();

  const { product } = props;

  const { id, title, brand, price, description, image } = product;

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <div>
      <div style={{ color: "rgba(250, 5, 35, .7)" }}>
        <h2>{title}</h2>
        <h4>by {brand}</h4>
      </div>
      <div>
        <img src={image} style={{ width: "250px", borderRadius: "2px" }}></img>
        <hr></hr>
        {description}
      </div>
      <h4>${price / 100} /day</h4>
      <button
        onClick={handleAddToCart}
        style={{
          width: "122px",
          backgroundColor: "rgba(250, 5, 35, .7)",
          marginBottom: "10px",
          fontSize: "22px",
          borderRadius: "4px",
          color: "#05FADC",
          fontWeight: "bolder",
          border: "solid white 2px",
        }}
      >
        RENT
      </button>
    </div>
  );
}
