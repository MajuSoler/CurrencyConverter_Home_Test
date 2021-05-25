/* eslint-disable import/no-anonymous-default-export */

import { CURRENCY_LIST_FETCHED } from "./actions";

const initialState = {
  listOfCoins: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_LIST_FETCHED:
      return {
        ...state,
        listOfCoins: action.payload,
      };

    default:
      return state;
  }
};
