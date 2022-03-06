import { ActionTypes } from "../../constants/ActionTypes";

const initialState = [
  {
    products: {},
  },
];

export const products = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        state: { products: { ...state.products, ...action.payload } },
      };

    default:
      return state;
  }
};
