import {
  ADMIN_LOGIN_REQUEST ,
  ADMIN_LOGIN_SUCCESS ,
  ADMIN_LOGIN_WRONG ,
  ADMIN_LOGIN_FAILED
} from './types';


export const adminLoginRequest = () => ({
  type: ADMIN_LOGIN_REQUEST
})

export const adminLoginSuccess = adminUser => ({
  type: ADMIN_LOGIN_SUCCESS,
  adminUser
})

export const adminLoginWrong = () => ({
  type: ADMIN_LOGIN_WRONG
})

export const adminLoginError = error => ({
  type: ADMIN_LOGIN_FAILED,
  error
})

export const adminLogin = (loginBody) => {
  return dispatch => {
    dispatch(adminLoginRequest())
    return fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(loginBody)
    })
      .then(res => res.json())
      .then(user => {
        if(user.success) {
          sessionStorage.setItem('token', user.token)
          dispatch(adminLoginSuccess(user))
        } else {
          dispatch(adminLoginWrong())
        }
      })
      .catch(error => dispatch(adminLoginError(error)))
  }
}
