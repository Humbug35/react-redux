import { POST_REGISTER_BEGIN, POST_REGISTER_SUCCESS, POST_REGISTER_FAIL } from '../actions/types';


const initialState = {
  register: null,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POST_REGISTER_BEGIN:
      return {
        ...state
      }
     case POST_REGISTER_SUCCESS:
        return {
          ...state,
          register: action.payload
        }
      case POST_REGISTER_FAIL:
        return {
          ...state,
          error: action.payload
        }
    default:
        return state;
  }
}
