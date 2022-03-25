import { SET_SELECTED_ANIMAL } from './actionTypes';

export const setSelectedAnimalAction = (params) => {
  return {
    type: SET_SELECTED_ANIMAL,
    params,
  };
};
