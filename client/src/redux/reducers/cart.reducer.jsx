import {
  ADD_TO_CART,
  DEL_FROM_CART,
  MIN_QTY,
  PLUS_QTY,
} from "../actions/cart.actions";

const INITIAL_STATE = [
  {
    id: 4,
    img: "/images/3.jpg",
    title: "bags",
    category: "clothes",
    owner: "Shimran",
    price: 100,
    units: 1,
  },
];

const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const cart = state;
  const product = action.payload;

  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = cart.findIndex((p) => p.id === product.id);
      if (existingProductIndex >= 0) {
        const cartProducts = cart.slice();
        const existingProducts = cartProducts[existingProductIndex];

        const updatedUnitsProduct = {
          ...existingProducts,
          units: existingProducts.units + product.units,
        };

        cartProducts[existingProductIndex] = updatedUnitsProduct;
        return cartProducts;
      } else {
        return [...cart, product];
      }
    case DEL_FROM_CART:
      const filteredItems = cart.filter((i) => i.id !== product.id);
      return filteredItems;
    case PLUS_QTY:
      const maxProductIndex = cart.findIndex((p) => p.id === product.id);
      if (maxProductIndex >= 0) {
        const cartProducts = cart.slice();
        const existingProducts = cartProducts[maxProductIndex];

        const updatedUnitsProduct = {
          ...existingProducts,
          units: existingProducts.units + 1,
        };

        cartProducts[maxProductIndex] = updatedUnitsProduct;
        return cartProducts;
      }
      break;
    case MIN_QTY:
      const minProductIndex = cart.findIndex((p) => p.id === product.id);
      if (minProductIndex >= 0) {
        const cartProducts = cart.slice();
        const existingProducts = cartProducts[minProductIndex];

        const updatedUnitsProduct = {
          ...existingProducts,
          units: existingProducts.units - 1,
        };

        cartProducts[minProductIndex] = updatedUnitsProduct;
        return cartProducts;
      }
      break;
    default:
      return state;
  }
};

export default cartReducer;
