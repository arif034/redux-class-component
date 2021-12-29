import { BUY_CAKE } from "./CakeType.js";

const initialState = {
  numOfcakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfcakes: state.numOfcakes - 1 };
    default:
      return state;
  }
};

export default cakeReducer;
