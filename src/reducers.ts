import { actions } from './actions';
import type { ActionType } from './actions';
import type { Reducer } from 'redux';

export type StateType = {
  productsSlugs: Array<string>;
};

const cartReducer: Reducer<StateType | undefined, ActionType> = (
  state: StateType = { productsSlugs: [] },
  action: ActionType
) => {
  const { type } = action;

  switch (type) {
    case actions.ADD_TO_CART:
      return { productsSlugs: [...state.productsSlugs, action.productSlug] };
    case actions.REMOVE_FROM_CART:
      return {
        productsSlugs: state.productsSlugs.filter(
          (slug) => slug !== action.productSlug
        ),
      };
  }
};

export default cartReducer;
