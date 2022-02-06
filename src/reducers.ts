import { actions } from './actions';
import type { ActionType } from './actions';
import type { Reducer } from 'redux';

import type { ProductType } from './products';

export type ProductPair = {
  slug: string;
  quantity: number;
};

export type FullProductPair = {
  product: ProductType;
  quantity: number;
};

export type StateType = {
  productPairs: Array<ProductPair>;
};

const cartReducer: Reducer<StateType | undefined, ActionType> = (
  state: StateType = { productPairs: [] },
  action: ActionType
): StateType | undefined => {
  const { type } = action;
  const pairs = state.productPairs.slice();

  switch (type) {
    case actions.ADD_TO_CART:
      for (let p of pairs) {
        if (p.slug === action.productSlug) {
          const index = pairs.indexOf(p);
          pairs[index] = {
            slug: p.slug,
            quantity: p.quantity + action.quantity,
          };
          return { productPairs: pairs };
        }
      }
      return {
        productPairs: [
          ...pairs,
          { slug: action.productSlug, quantity: action.quantity },
        ],
      };

    case actions.REMOVE_FROM_CART:
      for (let p of pairs) {
        if (p.slug === action.productSlug) {
          const index = pairs.indexOf(p);
          pairs[index] = { slug: p.slug, quantity: p.quantity - 1 };
          if (pairs[index].quantity <= 0) pairs.splice(index);
          return { productPairs: pairs };
        }
      }
      return state;
  }
};
export default cartReducer;
