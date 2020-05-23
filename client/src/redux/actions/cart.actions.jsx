export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";
export const MIN_QTY = "MIN_QTY";
export const PLUS_QTY = "PLUS_QTY";

export const addToCartAction = ({
  id,
  img,
  title,
  category,
  owner,
  price,
  units,
}) => {
  return {
    type: ADD_TO_CART,
    payload: { id, img, title, category, owner, price, units },
  };
};
export const minQtyCartAction = ({
  id,
  img,
  title,
  category,
  owner,
  price,
  units,
}) => {
  return {
    type: MIN_QTY,
    payload: { id, img, title, category, owner, price, units },
  };
};
export const plusQtyCartAction = ({
  id,
  img,
  title,
  category,
  owner,
  price,
  units,
}) => {
  return {
    type: PLUS_QTY,
    payload: { id, img, title, category, owner, price, units },
  };
};
export const delFromCartAction = ({
  id,
  img,
  title,
  category,
  owner,
  price,
  units,
}) => {
  return {
    type: DEL_FROM_CART,
    payload: { id, img, title, category, owner, price, units },
  };
};
