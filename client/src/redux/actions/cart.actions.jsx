export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";
export const MIN_QTY = "MIN_QTY";
export const PLUS_QTY = "PLUS_QTY";

export const addToCartAction = ({
  _id,
  image_path,
  name,
  category_id,
  owner,
  price,
  qty,
}) => {
  return {
    type: ADD_TO_CART,
    payload: { _id, image_path, name, category_id, owner, price, qty },
  };
};
export const minQtyCartAction = ({
  _id,
  image_path,
  name,
  category_id,
  owner,
  price,
  qty,
}) => {
  return {
    type: MIN_QTY,
    payload: { _id, image_path, name, category_id, owner, price, qty },
  };
};
export const plusQtyCartAction = ({
  _id,
  image_path,
  name,
  category_id,
  owner,
  price,
  qty,
}) => {
  return {
    type: PLUS_QTY,
    payload: { _id, image_path, name, category_id, owner, price, qty },
  };
};
export const delFromCartAction = ({
  _id,
  image_path,
  name,
  category_id,
  owner,
  price,
  qty,
}) => {
  return {
    type: DEL_FROM_CART,
    payload: { _id, image_path, name, category_id, owner, price, qty },
  };
};
