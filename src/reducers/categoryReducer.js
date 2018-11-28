import { FETCH_CATEGORIES_FOR_NAVIGATION } from '../actions/types';

const initialState = {
  categories: [],
}

export const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_FOR_NAVIGATION:
     return {
       ...state,
       categories: action.categories
     }
    default:
     return state;
  }
}
