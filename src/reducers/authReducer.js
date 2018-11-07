import { POST_REGISTER } from '../actions/types';


const initialState = {
  register: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POST_REGISTER:
      return {
        ...state,
        register: action.payload
      }
    default:
        return state;
  }
}
