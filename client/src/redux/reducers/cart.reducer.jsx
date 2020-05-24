import {
  ADD_TO_CART,
  DEL_FROM_CART,
  MIN_QTY,
  PLUS_QTY,
} from "../actions/cart.actions";

const INITIAL_STATE = [
  {
    _id: 4,
    image_path: "/images/3.jpg",
    name: "bags",
    category_id: "clothes",
    owner: "Shimran",
    price: 100,
    qty: 1,
  },
  {
    _id: 5,
    image_path: "/images/3.jpg",
    name: "bags",
    category_id: "clothes",
    owner: "Shimran",
    price: 100,
    qty: 1,
  },
];

const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const cart = state;
  const product = action.payload;

  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = cart.findIndex((p) => p._id === product._id);
      if (existingProductIndex >= 0) {
        const cartProducts = cart.slice();
        const existingProducts = cartProducts[existingProductIndex];

        const updatedUnitsProduct = {
          ...existingProducts,
          qty: existingProducts.qty + product.qty,
        };

        cartProducts[existingProductIndex] = updatedUnitsProduct;
        return cartProducts;
      } else {
        return [...cart, product];
      }
    case DEL_FROM_CART:
      const filteredItems = cart.filter((i) => i._id !== product._id);
      return filteredItems;
    case PLUS_QTY:
      const maxProductIndex = cart.findIndex((p) => p._id === product._id);
      if (maxProductIndex >= 0) {
        const cartProducts = cart.slice();
        const existingProducts = cartProducts[maxProductIndex];

        const updatedUnitsProduct = {
          ...existingProducts,
          qty: existingProducts.qty + 1,
        };

        cartProducts[maxProductIndex] = updatedUnitsProduct;
        return cartProducts;
      }
      break;
    case MIN_QTY:
      const minProductIndex = cart.findIndex((p) => p._id === product._id);
      if (minProductIndex >= 0) {
        const cartProducts = cart.slice();
        const existingProducts = cartProducts[minProductIndex];

        const updatedUnitsProduct = {
          ...existingProducts,
          qty: existingProducts.qty - 1,
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
