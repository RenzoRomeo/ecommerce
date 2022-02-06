export type ActionType = {
  type: string;
  productSlug: string;
  quantity: number;
};

type ActionList = {
  ADD_TO_CART: string;
  REMOVE_FROM_CART: string;
};

export const actions: ActionList = {
  ADD_TO_CART: 'addToCart',
  REMOVE_FROM_CART: 'removeFromCart',
};

export const actionAddToCart = (
  productSlug: string,
  quantity: number
): ActionType => ({
  type: actions.ADD_TO_CART,
  productSlug,
  quantity,
});

export const actionRemoveFromCart = (
  productSlug: string,
  quantity: number
): ActionType => ({
  type: actions.REMOVE_FROM_CART,
  productSlug,
  quantity,
});
