import { INCREMENT, DECREMENT, ZERO } from './actionsType';

export const increment = () => {
  return {
    type: INCREMENT,
    // payload: number
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
    // payload: number
  };
};

export const zero = () => {
  return {
    type: ZERO,
    // payload: number
  };
};