import {
  ADMIN_LOGIN_REQUEST ,
  ADMIN_LOGIN_SUCCESS ,
  ADMIN_LOGIN_WRONG ,
  ADMIN_LOGIN_FAILED
} from '../actions/types';


const initialState = {
  adminUser: null,
  wrong: null,
  error: null
}

export const adminLoginReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADMIN_LOGIN_REQUEST:
     return {
       ...state
     }
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminUser: action.adminUser,
        wrong: false
      }
    case ADMIN_LOGIN_WRONG:
      return {
        ...state,
        wrong: true
      }
    case ADMIN_LOGIN_FAILED:
      return {
        error: action.error
      }
    default:
      return state
  }
}
