export type ActionType = {
  type: string;
  productSlug: string;
};

type ActionList = {
  ADD_TO_CART: string;
  REMOVE_FROM_CART: string;
};

export const actions: ActionList = {
  ADD_TO_CART: 'addToCart',
  REMOVE_FROM_CART: 'removeFromCart',
};

export const actionAddToCart = (productSlug: string): ActionType => ({
  type: actions.ADD_TO_CART,
  productSlug,
});

export const actionRemoveFromCart = (productSlug: string): ActionType => ({
  type: actions.ADD_TO_CART,
  productSlug,
});
