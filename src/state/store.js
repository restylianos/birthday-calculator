import { createStore } from 'redux';

import { SET_SELECTED_ANIMAL } from './actions/actionTypes';

const initialState = {
  selectedAnimalName: null,
};

const reducers = (initialState = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_ANIMAL:
      return {
        ...initialState,
        selectedAnimalName: action.params,
      };
    default:
      return initialState;
  }
};

const store = createStore(reducers, initialState);

export default store;
