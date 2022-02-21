import { createContext, useContext, useReducer } from "react";

export const shoppingCartContext = createContext();

export const useShoppingCart = () => useContext(shoppingCartContext);

const shoppingCartInitialState = [];

const addItemToCartAction = "addItemToCart";

const removeItemFromCartAction = "removeItemFromCart";

const emptyCartAction = "emptyCart";

const increaseCartAction = "increaseCart";

const decreaseCartAction = "decreaseCart";

const shoppingCartReducer = (state, action) => {
  if (action.type === addItemToCartAction) {
    const itemFoundInCart = state.find(
      (cartItem) => cartItem.id === action.cartItem.id
    );

    if (!itemFoundInCart) {
      return [...state, { ...action.cartItem, quantity: 1 }];
    }

    const cartWithFoundItemRemoved = state.filter(
      (item) => item.id !== action.cartItem.id
    );

    return [
      ...cartWithFoundItemRemoved,
      { ...action.cartItem, quantity: itemFoundInCart.quantity + 1 },
    ];
  }

  if (action.type === removeItemFromCartAction) {
    return state.filter((item) => item.id !== action.itemId);
  }

  if (action.type === emptyCartAction) {
    return shoppingCartInitialState;
  }

  if (action.type === increaseCartAction) {
    console.log("Increase");
    console.log("state: " + state);
    return state;
  }

  if (action.type === decreaseCartAction) {
    console.log("Decrease");
    const decreaseItemFound = state.find((item) => item.id !== action.itemId);
    console.log(decreaseItemFound);
    return state;
  }
};

export const ShoppingCartProvider = (props) => {
  const { children } = props;
  const [shoppingCart, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState
  );

  console.log("shoppingCart: ", shoppingCart);

  const removeItem = (id) => {
    dispatch({
      type: removeItemFromCartAction,
      itemId: id,
    });
  };

  const addItemToCart = (product) => {
    dispatch({
      type: addItemToCartAction,
      cartItem: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
    });
  };

  const emptyShoppingCart = () => {
    dispatch({ type: emptyCartAction });
  };

  // const increaseCartQuantity = (id) => {
  //   dispatch({
  //     type: increaseCartAction,
  //     itemId: id,
  //   });
  // };

  // const decreaseCartQuantity = (product) => {
  //   dispatch({
  //     type: decreaseCartAction,
  //     cartItem: {
  //       id: product.id,
  //       quantity: product.quantity,
  //     },
  //   });
  // };

  const cartTotal = shoppingCart.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  return (
    <shoppingCartContext.Provider
      value={{
        shoppingCart,
        removeItem,
        addItemToCart,
        emptyShoppingCart,
        // increaseCartQuantity,
        // decreaseCartQuantity,
        cartTotal,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};
